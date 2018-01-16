import React from 'react'
import ReactDOM from 'react-dom'
import MoodColor from './MoodColor'
import registerServiceWorker from './registerServiceWorker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () => (
	<MuiThemeProvider>
		<MoodColor />
	</MuiThemeProvider>
)
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
