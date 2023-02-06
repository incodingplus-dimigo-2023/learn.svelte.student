import { get_index } from '$lib/server/content';

/**
 * 
 * @returns {{index:import('$lib/types').PartStub[]}}
 */
export function load() {
	console.log('layout');
	return {
		index: get_index().map((part) => ({
			/** @type {string} */
			title: part.meta.title,
			/** @type {string} */
			slug: part.meta.slug,
			chapters: part.chapters.map((chapter) => ({
				/** @type {string} */
				title: chapter.meta.title,
				/** @type {string} */
				slug: chapter.meta.slug,
				exercises: chapter.exercises.map((exercise) => ({
					/** @type {string} */
					title: exercise.title,
					/** @type {string} */
					slug: exercise.slug,
					next:exercise.next,
					prev:exercise.prev
				}))
			}))
		}))
	};
}
