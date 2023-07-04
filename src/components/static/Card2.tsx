import React from 'react'
import styled from 'styled-components'
import { createTask2, deleteTask, updateTask } from '../../utils/API';
import Button from './Button';

interface iCard2{
    title?: string;
    data?: []
}

const Card2:React.FC<iCard2> = ({title, data}) => {
  return (
    <div>
        <Main>
            <Title>{title}</Title>
            {
              data?.map((props:any)=>(
                <Box key={props.id}
                bg={
                  props.priority === "Urgent"? "red" :
                  props.priority === "High"? "blue":
                  props.priority === "Low"? "pink": "yellow"
              }
                >

            <Task td={props.completed? "w": ""}>{props?.task}</Task>

            <MoveHold>
            <Move
            onClick={()=>{
              createTask2(props)
              deleteTask(props.id)

            window.location.reload()
            }
            }
            >
              Move to Processing
            </Move>
            <Move
            onClick={()=>{
              createTask2(props)
              deleteTask(props.id)

            window.location.reload()
            }
            }
            >
              Move to Processing
            </Move>
            </MoveHold>
            <Button />
            </Box>
              ))
            }
        </Main>
    </div>
  )
}

export default Card2

const MoveHold = styled.div`
display: flex;
`

const Move = styled.div`
padding: 10px 10px;
display: flex;
justify-content: center;
align-items: center;
background-color: blue;
color: white;
outline: none;
border-radius: 5px;
border: none;
margin-top: 20px;
margin-bottom: 10px;
cursor: pointer;

:hover{
    background-color: black;
}
`

const Task = styled.div<{td?: string}>`
color: black;
font-size: 20px;
font-weight: 500;
margin-top: 10px;
text-decoration: ${({td})=> td? "line-through": "none"};
`

const Box = styled.div<{bg?: string}>`
width: 100%;
background-color:  ${({bg})=> bg};
color: blue;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-top: 1px solid blue;
`
const Title = styled.div`
background-color: blue;
color: white;
font-size: 20px;
text-transform: uppercase;
text-align: center;
display: flex;
height: 50px;
justify-content: center;
align-items: center;
margin-bottom: 5px;
`

const Main = styled.div`
width: 300px;
min-height: 50px;
border: 1px solid silver;
margin-right: 10px;
`