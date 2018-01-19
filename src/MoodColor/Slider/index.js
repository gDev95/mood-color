import React from 'react'
import Slider from 'material-ui/Slider'
import PropTypes from 'prop-types'
import './index.css'
import HappyIcon from 'material-ui/svg-icons/social/mood'
import SadIcon from 'material-ui/svg-icons/social/mood-bad'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'



class MoodSlider extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			moodValue:6
		}
		this.onMoodChange = this.onMoodChange.bind(this)
	}
	onMoodChange (event,value) {
		event.preventDefault()
		this.props.changeMood(value)
		this.setState({moodValue: value})   
	}
	
	render() {
		// change the slider default values of the material-ui theme
		const muiTheme = getMuiTheme({
			slider: {
				selectionColor: this.props.mood ? this.props.moodFontColor : '#000',
				  handleFillColor: this.props.mood ? this.props.moodFontColor : '#000'
			}
		})
		return(
			<div className='slider-wrapper'>
				<div className='slider-container'>
					<HappyIcon className='mood-emotion' style={{color: this.props.mood ? this.props.moodFontColor : '#000'}}/>
					<div className='slider'>
						<MuiThemeProvider muiTheme={muiTheme}>
							<Slider  min={0} max={12} value={this.state.moodValue} onChange={this.onMoodChange} />
						</MuiThemeProvider>

					</div>
					<SadIcon className='mood-emotion' style={{color: this.props.mood ? this.props.moodFontColor : '#000'}}/>
				</div>
				<span style={{color: this.props.mood ? this.props.moodFontColor : '#000'}}>  {this.props.mood ? `Your Mood: ${this.props.mood}` : ''} </span>
			</div> 
		)
	}
}


MoodSlider.propTypes = {
	changeMood: PropTypes.func.isRequired,
	mood: PropTypes.string,
	moodColor: PropTypes.string,
	moodFontColor: PropTypes.string
}

export default MoodSlider
