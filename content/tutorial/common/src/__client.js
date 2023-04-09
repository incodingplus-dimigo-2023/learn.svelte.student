// Hack into the alert that's used in some tutorials and send a message prior to the alert,
// else the parent thinks we lost contact and wrongfully reloads the page.
// The drawback is that alert is no longer blocking, but no tutorial relies on this.
const alert = window.alert;
window.alert = (message) => {
	parent.postMessage(
		{
			type: 'ping-pause'
		},
		'*'
	);
	setTimeout(() => {
		alert(message);
	});
};

window.addEventListener('message', async (e) => {
	if (e.data.type === 'fetch') {
		const names = e.data.names;

		const transformed = await Promise.all(
			names.map(async (name) => {
				const res = await fetch(name);
				return {
					name,
					code: await res.text()
				};
			})
		);

		const css_files = [];

		for (const { name, code } of transformed) {
			if (
				name.endsWith('.svelte') &&
				code.includes('svelte&type=style&lang.css')
			) {
				css_files.push(name + '?svelte&type=style&lang.css');
			}
		}

		if (css_files.length > 0) {
			const css_transformed = await Promise.all(
				css_files.map(async (name) => {
					const res = await fetch(name);
					return {
						name,
						code: await res.text()
					};
				})
			);

			transformed.push(...css_transformed);
		}

		parent.postMessage(
			{
				type: 'fetch-result',
				data: transformed
			},
			'*'
		);
	} else if(e.data.type === 'fetch-response'){
		if(map.has(e.data.data.date)){
			const obj = map.get(e.data.data.date);
			map.delete(e.data.data.date);
			if(e.data.data.type === 'error'){
				obj.rej(e.data.data.data);
			} else {
				const blob = new Blob([e.data.data.data], {
					type:e.data.data.type
				});
				obj.res(blob);
			}
		}
	}
});

function ping() {
	parent.postMessage(
		{
			type: 'ping',
			data: {
				path: location.pathname + location.search + location.hash
			}
		},
		'*'
	);
	document.body.innerHTML
}

setInterval(ping, 100);
ping();

if (import.meta.hot) {
	import.meta.hot.on('vite:beforeUpdate', (event) => {
		parent.postMessage(
			{
				type: 'hmr',
				data: event.updates
			},
			'*'
		);
	});
}

/** 
 * The iframe sometimes takes focus control in ways we can't prevent
 * while the editor is focussed. Refocus the editor in these cases.
 */
window.addEventListener('focusin', (e) => {
	if (e.target.tagName === 'BODY') {
		parent.postMessage(
			{
				type: 'focus_on_editor'
			},
			'*'
		);
	}
});

/** @type {Map<string,{res:(any)=>any,rej:(any)=>any}>} */
let map = new Map();

const mut = new MutationObserver((mut) => {
	for(let i of mut){
		i.addedNodes.forEach((v, i) => {
			if(v instanceof HTMLImageElement || v instanceof HTMLAudioElement){
				v.addEventListener('error', e => {
					let date = `${Date.now()}${Math.random()}`;
					parent.postMessage({
						type:'fetch-request',
						data:{
							url:v.src,
							date
						}
					}, '*');
					new Promise((res, rej) => map.set(date, {res, rej}))
						.then(async t => {
							let reader = new FileReader();
							reader.readAsDataURL(t);
							await new Promise(res => reader.addEventListener('load', res, {once:true}));
							v.src = reader.result.toString();
						}).catch(err => {
							console.error(err);
						})
				}, {once:true})
			}
		})
	}
});
mut.observe(document.body, { childList:true, subtree:true});