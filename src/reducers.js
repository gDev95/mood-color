import * as MoodActions from './actions'
import moods from './data'

// initial state set up
const initialState = {
	moodState: '',
	moodColorLeft: '',
	moodColorRight: '',
}

export function moodApp (state = initialState,action){
	let newState
	switch(action.type){
	case MoodActions.MOOD_CHANGE:
	 	moods.map((mood, index) => {		
			if (Math.round(Number(action.value)) === index ){
			// if not mood has no meaning, do not set moodState
				if(mood.meaning)
				{
					newState = {
						moodState: mood.meaning, 
						moodColorLeft: mood.leftColor,
						moodColorRight: mood.rightColor, 
					}
					return 1
				}
				else
				{
					newState = {...state,
						moodColorLeft: mood.leftColor,
						moodColorRight: mood.rightColor, 
					}
					return 1
				}
			}
			else {
				return 0
			}
		})
		return newState
	default: 
		return state
	}
    
}