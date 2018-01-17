import React from 'react'
import Slider from 'material-ui/Slider'
import PropTypes from 'prop-types'
import './index.css'
import HappyIcon from 'material-ui/svg-icons/social/mood'
import SadIcon from 'material-ui/svg-icons/social/mood-bad'
class MoodSlider extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			moodValue:3
		}
		this.onMoodChange = this.onMoodChange.bind(this)
	}
	onMoodChange (event,value) {
		event.preventDefault()
		this.props.changeMood(value)
		this.setState({moodValue: value})   
	}
	render() {
		return(
			<div className='slider-wrapper'>
				<div className='slider-container'>
					<HappyIcon className='mood-emotion'/>
					<div className='slider'>
						<Slider min={1} max={7} value={this.state.moodValue} onChange={this.onMoodChange} />
					</div>
					<SadIcon className='mood-emotion' />
				</div>
				<span> Your current mood is {this.props.mood ? this.props.mood : 'not yet determined'} </span>
			</div> 
		)
	}
}


MoodSlider.propTypes = {
	changeMood: PropTypes.func.isRequired,
	mood: PropTypes.string,
	moodColor: PropTypes.string
}

export default MoodSlider
