import React, { Component } from 'react'
import StyledContainer from './StyledContainer'
import moods from 'data.js'
import MoodSlider from '../Slider'


class Container extends Component {
	constructor(){
		super()
		this.state = {
			moodValue: 0.0,
			moodState: '',
			moodColorLeft: '',
			moodColorRight: '',
			moodFontColor: ''
		}
		this.onChange = this.onChange.bind(this)
	}
    
	onChange (value) {
		this.setState({moodValue: value})
		this.getMood(value)
        
	}
	getMood(moodValue) {
		moods.map((mood, index) => {		
			if (Math.round(Number(moodValue)) === index ){
				if(mood.meaning)
				{
					this.setState({
						moodState: mood.meaning, 
						moodColorLeft: mood.leftColor,
						moodColorRight: mood.rightColor, 
						moodFontColor: mood.fontColor
					})
				}
				else
				{
					this.setState({
						moodColorLeft: mood.leftColor,
						moodColorRight: mood.rightColor, 
						moodFontColor: mood.fontColor
					})	
				}
				
				return 1
			}
			else {
				return 0
			}
		})
	}
	render() {
		
		return (
			<StyledContainer moodColorLeft={this.state.moodColorLeft} moodColorRight={this.state.moodColorRight}>
				<MoodSlider mood={this.state.moodState} moodFontColor={this.state.moodFontColor} moodColor={this.state.moodColor} changeMood={this.onChange} />
			</StyledContainer>
		)
	}
}

export default Container