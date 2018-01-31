/* 
    action types 
*/

export const MOOD_CHANGE = 'MOOD_CHANGE'


export function changeMood(value){
	return { type: MOOD_CHANGE, value}
}
