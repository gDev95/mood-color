import React from 'react'
import {shallow} from 'enzyme'
import toJSON from 'enzyme-to-json'
import Container from '../index'

describe('container component', () => {
	const component = shallow(
		<Container />
	)
	test('renders properly', () => {
		const tree = toJSON(component)
		expect(tree).toMatchSnapshot()
	})
	
})