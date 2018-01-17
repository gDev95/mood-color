import React, { Component } from 'react'
import './index.css'
import data from 'data.js'
import MoodSlider from '../Slider'


class Container extends Component {
	constructor(){
		super()
		this.state = {
			moodValue: 0.0,
			moodState: '',
			moodColor: ''
		}
		this.onChange = this.onChange.bind(this)
	}
    
	onChange (value) {
		this.setState({moodValue: value})
		this.getMood(value)
        
	}
	getMood(moodValue) {
		
		data.moods.map((mood) => {
			
			if(Math.round(Number(moodValue)) === mood.value ){
				this.setState({moodState: mood.meaning, moodColor: mood.color})
				return 1
			}
			else {
				return 0
			}
		})
	}
	render() {
		
		return (
			<div className='container' style={{ backgroundColor: this.state.moodColor  ? this.state.moodColor : '#FFF'}}>
				<MoodSlider mood={this.state.moodState} moodColor={this.state.moodColor} changeMood={this.onChange} />
			</div>
		)
	}
}

export default Container