import React, { Component } from 'react'
import StyledContainer from './StyledContainer'
import moods from 'data.js'
import MoodSlider from '../Slider'
import { connect, MapStateToProps } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as MoodActions from 'actions'

class Container extends Component {
	render() {
		const { dispatch, moodState, moodColorLeft, moodColorRight} = this.props
		const changeMood = bindActionCreators(MoodActions.changeMood, dispatch)
		return (
			<StyledContainer moodColorLeft={moodColorLeft} moodColorRight={moodColorRight}>
				<MoodSlider 
					mood={moodState} 
					changeMood={changeMood} />
			</StyledContainer>
		)
	}
}
const mapToStateProps = state => ({
	moodState: state.moodState,
	moodColorLeft: state.moodColorLeft,
	moodColorRight: state.moodColorLeft
})
export default connect(mapToStateProps)(Container)