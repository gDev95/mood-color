// used in order to pass prop to css 

import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
display:flex;
height:70vh;
justify-content: center;
align-items: center;
background: linear-gradient(to right, 
    ${ props  => props.moodColorLeft }, 
    ${ props => props.moodColorRight })
`

export default StyledContainer