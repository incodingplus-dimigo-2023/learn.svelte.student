import { writable } from "svelte/store";

/** @param {string} name */
export function get_depth(name) {
	return name.split('/').length - 1;
}

/**
 * 
 * @param {string} str 
 */
export function myAlert(str){
	alert(str);
}


export const isTeacher = writable(false);
