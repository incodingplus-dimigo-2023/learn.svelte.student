import { get_exercise } from '$lib/server/content';
import { error } from '@sveltejs/kit';
// import glob from 'tiny-glob';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	/**@type {import('$lib/types').Exercise | undefined} */
	let exercise = get_exercise(params.slug);
	if (!exercise) {
		throw error(404, 'No such tutorial found');
	}
	// const arr = await glob('./content/**/app-b/**');
	// console.log(arr);
	return {
		exercise,
	};
}
