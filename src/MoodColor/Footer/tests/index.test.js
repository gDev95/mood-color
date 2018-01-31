import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Footer from '../index.js'


describe('Footer component',() =>{
	const component = shallow(
		<Footer />
	)
	test('renders properly', () => {
		const tree = toJSON(component)
		expect(tree).toMatchSnapshot()
	})      
})