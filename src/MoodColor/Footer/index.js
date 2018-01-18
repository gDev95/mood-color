import React from 'react'
import './index.css'
import FontAwesome from 'react-fontawesome'
import { Link, Router } from 'react-router-dom'
const Footer = () => (
	<div className='footer-wrapper'>
		<div className='footer-text'> 
			<a className='footer-icon' target='_blank' href='https://github.com/gDev95'><FontAwesome  size='2x' name='github' /></a>
			<FontAwesome className='footer-icon' size='2x' name='linkedin' />
		</div>
	</div>    
)
export default Footer