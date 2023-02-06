import fs from 'node:fs';
import path from 'node:path';

export const con = 'content';

export const text_files = new Set([
	'.svelte',
	'.txt',
	'.json',
	'.js',
	'.ts',
	'.css',
	'.svg',
	'.html',
	'.md',
	'.env'
]);

const excluded = new Set(['.DS_Store', '.gitkeep', '.svelte-kit', 'package-lock.json']);

/** @param {string} file */
export function json(file) {
	return JSON.parse(fs.readFileSync(file, 'utf-8'));
}

export function get_index() {
	const parts = [];

	/** @type {import('$lib/types').ExerciseRaw | null} */
	let last_exercise = null;

	let last_part_meta = null;
	let last_chapter_meta = null;

	for (const part of fs.readdirSync(`${con}/tutorial`)) {
		if (!/^\d{2}-/.test(part)) continue;

		/** @type {import('$lib/types').iMeta & {slug:string}} */
		const part_meta = {
			...json(`${con}/tutorial/${part}/meta.json`),
			slug: part
		};

		const chapters = [];
		for (const chapter of fs.readdirSync(`${con}/tutorial/${part}`)) {
			if (!/^\d{2}-/.test(chapter)) continue;
			
			/** @type {import('$lib/types').iMeta & {slug:string}} */
			const chapter_meta = {
				...json(`${con}/tutorial/${part}/${chapter}/meta.json`),
				slug: chapter
			};

			const exercises = [];

			for (const exercise of fs.readdirSync(`${con}/tutorial/${part}/${chapter}`)) {
				if (!/^\d{2}-/.test(exercise)) continue;
				for(const home of fs.readdirSync(`${con}/tutorial/${part}/${chapter}/${exercise}`)){
					const oriDir = `${con}/tutorial/${part}/${chapter}/${exercise}`;
					const dir = `${con}/tutorial/${part}/${chapter}/${exercise}/${home}`;
					if (!fs.statSync(dir).isDirectory()) continue;
					const slug = home;
	
					/** @type {import('$lib/types').iMeta} */
					const meta = fs.existsSync(`${oriDir}/meta.json`) ? json(`${oriDir}/meta.json`) : {};
					if (last_exercise) {
						last_exercise.next = slug
					}
	
					exercises.push(
						(last_exercise = {
							slug: home,
							title:home,
							path:'/',
							focus:meta.focus ?? chapter_meta.focus ?? part_meta.focus ?? 'src/lib/App.svelte',
							dir,
							prev: last_exercise ? last_exercise.slug : null,
							meta,
							next: null
						})
					);
	
					last_chapter_meta = chapter_meta;
					last_part_meta = part_meta;
				}
			}

			chapters.push({
				meta: {
					...part_meta,
					...chapter_meta
				},
				exercises
			});
		}

		parts.push({
			slug: part,
			meta: part_meta,
			chapters
		});
	}

	return parts;
}

/**
 * @param {string} slug
 * @returns {import('$lib/types').Exercise | undefined}
 */
export function get_exercise(slug) {
	const index = get_index();

	for (let i = 0; i < index.length; i += 1) {
		const part = index[i];

		for (const chapter of part.chapters) {
			for (const exercise of chapter.exercises) {
				if (exercise.slug === slug) {
					const a = {
						...walk(`${exercise.dir}/app-b`),
						...walk(`${con}/tutorial/common`, {
							exclude: ['node_modules', 'static/tutorial', 'static/svelte-logo-mask.svg']
						}),
						...walk(`${con}/tutorial/${part.slug}/common`)
					};

					const scope = chapter.meta.scope ?? part.meta.scope;
					
					return {
						part: {
							slug: part.meta.slug,
							title: part.meta.title,
							index: i
						},
						chapter: {
							slug: chapter.meta.slug,
							title: chapter.meta.title
						},
						scope,
						focus: exercise.focus ?? chapter.meta.focus ?? part.meta.focus,
						title: exercise.title,
						path: exercise.path,
						slug: exercise.slug,
						prev: exercise.prev,
						next: exercise.next,
						dir: exercise.dir,
						a,
					};
				}
			}
		}
	}
}


/**
 * Get a list of all files in a directory
 * @param {string} cwd - the directory to walk
 * @param {{
 *   exclude?: string[]
 * }} options
 */
export function walk(cwd, options = {}) {
	/** @type {Record<string, import('$lib/types').FileStub | import('$lib/types').DirectoryStub>} */
	const result = {};

	if (!fs.existsSync(cwd)) return result;

	/**
	 * @param {string} dir
	 * @param {number} depth
	 */
	function walk_dir(dir, depth) {
		const files = fs.readdirSync(path.join(cwd, dir));

		for (const basename of files) {
			if (excluded.has(basename)) continue;

			const name = dir + basename;

			if (options.exclude?.some((exclude) => name.replace(/\\/g, '/').endsWith(exclude))) continue;

			const resolved = path.join(cwd, name);
			const stats = fs.statSync(resolved);

			if (stats.isDirectory()) {
				result[name] = {
					type: 'directory',
					name,
					basename
				};

				walk_dir(name + '/', depth + 1);
			} else {
				const text = text_files.has(path.extname(name) || path.basename(name));
				const contents = fs.readFileSync(resolved, text ? 'utf-8' : 'base64');

				result[name] = {
					type: 'file',
					name,
					basename,
					text,
					contents
				};
			}
		}
	}

	return walk_dir('/', 1), result;
}
