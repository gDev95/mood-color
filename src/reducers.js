import { changeMood, MOOD_CHANGE } from './actions'
import moods from './data'

// initial state set up
const initialState = {
	moodValue: 0.0,
	moodState: '',
	moodColorLeft: '',
	moodColorRight: '',
	moodFontColor: ''
}

export function moodApp (state = initialState,action){
	let  newState 
	switch(action.type){
	case MOOD_CHANGE:
		
		return Object.assign({}, state, {
            
		})
	default: 
		return state
	}
    
}