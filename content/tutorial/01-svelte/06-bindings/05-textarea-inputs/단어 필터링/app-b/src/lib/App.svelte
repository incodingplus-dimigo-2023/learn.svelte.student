<script>
	let value = ""
	let filtered = ""

	const words = ["스벨트", "svelte"]
	let filter = value.split('')
	$: {
		filter = value.split('')
		console.log(filter)
		for(let i=0;i < filter.length; i++){
			if(i > 1){
				if(filter[i-2] === '스'&&filter[i-1] === '벨'&&filter[i] === '트'){
					console.log('yes')
					filter[i-2] = '*'
					filter[i-1] = '*'
					filter[i] = '*'
				}
			}
			if(i > 4){
				if(filter[i-5] === 's'&&filter[i-4] === 'v'&&filter[i-3] === 'e'&&filter[i-2] === 'l'&&filter[i+-1] === 't'&&filter[i] === 'e'){
					filter[i] = '*'
					filter[i-1] = '*'
					filter[i-2] = '*'
					filter[i-3] = '*'
					filter[i-4] = '*'
					filter[i-5] = '*'
				}
			}
			filtered = filter.join('')
		}
		if(value === ''){
			filtered = ''
		}
	}
	
</script>

<textarea bind:value></textarea>
<div>{filtered}</div>