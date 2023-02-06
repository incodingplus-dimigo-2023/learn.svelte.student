import { error } from '@sveltejs/kit';
import glob from 'glob';
import { promisify } from 'util';
const proGlob = promisify(glob);

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
	/**@type {import('$lib/types').Exercise | undefined} */
	let exercise;
	let slugs = params.slug;
	
	if (!exercise) {
		throw error(404, 'No such tutorial found');
	}

	return {
		exercise
	};
}
