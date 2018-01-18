// used in order to pass prop to css 

import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
display:flex;
height:400px;
justify-content: center;
align-items: center;
background: linear-gradient(to right, ${props => props.moodColorLeft}, ${props => props.moodColorRight})
`

export default StyledContainer