import React from 'react'
import styled from 'styled-components'

interface iCard {
    text?: string
}
const Button:React.FC<iCard> = ({text}) => {
  return (
    <div>
        <Conatiner> {text} </Conatiner>
    </div>
  )
}

export default Button

const Conatiner = styled.div`
    padding: 10px;
    color: red;
`