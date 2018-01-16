import React, { Component } from 'react'
import './index.css'
import data from 'data.js'

class Container extends Component {
    constructor(){
        super()
        this.state = {
            mood: null
        }
    }
	render() {
		
		return (
			<div className='container' style={{ backgroundColor: this.state.mood ? this.state.mood : '#FFF'}}></div>
		)
	}
}

export default Container