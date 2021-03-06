import React from 'react'
import './index.css'
import FontAwesome from 'react-fontawesome'
const Footer = () => (
	<div className='footer-wrapper'>
		<div className='footer-text'> 
			<a className='footer-icon' target='_blank' rel="noopener noreferrer" href='https://github.com/gDev95'>
				<FontAwesome  size='2x' name='github' />
			</a>
			<a className='footer-icon' target='_blank' rel="noopener noreferrer"  href='https://www.linkedin.com/in/paul-meyer-046798a8'>
				<FontAwesome className='footer-icon' size='2x' name='linkedin' />
			</a>
		</div>
	</div>    
)
export default Footer