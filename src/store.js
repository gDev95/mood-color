import { createStore } from 'redux'
import { moodApp } from './reducers'
const store = createStore(moodApp,window.devToolsExtension && window.devToolsExtension())
export default store 