import React, { Component } from 'react'
import './index.css'
import data from 'data.js'
import MoodSlider from '../Slider'


class Container extends Component {
	constructor(){
		super()
		this.state = {
			moodValue: 0.0,
			moodState: undefined,
			moodColor: undefined
		}
		this.onChange = this.onChange.bind(this)
	}
    
	onChange (value) {
		this.setState({moodValue: value})
		this.getMood(value)
        
	}
	getMood(moodValue) {
		
		data.moods.map((mood) => {
			if(moodValue === mood.value ){
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
				<MoodSlider mood={this.state.moodState} changeMood={this.onChange} />
			</div>
		)
	}
}

export default Container