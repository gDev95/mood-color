import React from 'react'
import ReactDOM from 'react-dom'
import MoodColor from './MoodColor'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import store from './store'
import { changeMood } from './actions'
const MoodColorApp = () => (
	<Provider store={store}>
		<MuiThemeProvider>
			<MoodColor/>
		</MuiThemeProvider>
	</Provider>
)
ReactDOM.render(<MoodColorApp />, document.getElementById('root'))
registerServiceWorker()
