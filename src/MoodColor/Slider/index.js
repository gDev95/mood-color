import React from 'react'
import Slider from 'material-ui/Slider'
import PropTypes from 'prop-types'
import './index.css'
import HappyIcon from 'material-ui/svg-icons/social/mood'
import SadIcon from 'material-ui/svg-icons/social/mood-bad'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
// change the slider default values of the material-ui theme

const MoodSlider = (props) => {
	const { mood, moodValue, changeMood} = props
	const muiTheme = getMuiTheme({
		slider: {
			selectionColor: mood ? '#FFF' : '#000',
			handleFillColor: mood ? '#FFF' : '#000'
		}
	})
	return (
		<div className='slider-wrapper'>
			<div className='slider-container'>
				<HappyIcon 
					className='mood-emotion' 
					style={{color: mood ? '#FFF' : '#000'}}
				/>
				<div className='slider'>
					<MuiThemeProvider muiTheme={muiTheme}>
						<Slider  
							min={0} 
							max={12} 
							value={moodValue} 
							onChange={changeMood} 
						/>
					</MuiThemeProvider>
				</div>
				<SadIcon 
					className='mood-emotion' 
					style={{color: mood ? '#FFF' : '#000'}}
				/>
			</div>
			<span style={{color: mood ? '#FFF' : '#000', fontFamily: 'Kavivanar'}}>  {mood ? `Your Mood: ${mood}` : ''} </span>
		</div> 
	)
}



MoodSlider.propTypes = {
	changeMood: PropTypes.func.isRequired,
	mood: PropTypes.string,
	moodValue: PropTypes.number
}

export default MoodSlider
