import React from 'react'
import styled from 'styled-components'
import { createTask, createTask2, createTask3, deleteTask, deleteTask2, deleteTask3, updateTask } from '../../utils/API';

interface iCard{
    title?: string;
    data?: [];
    move?: string;
    move2?: string;
    move3?: string;
    move4?: string;
    bm1?: string;
    bm2?: string;
    bm3?: string;
    bm4?: string;

}

const Card:React.FC<iCard> = ({title, data, move, move2, move3, move4, bm1, bm2, bm3, bm4}) => {
  return (
    <div>
        <Main>
            <Title>{title}</Title>
            {
              data?.map((props:any)=>(
                <Box key={props.id}
                bg={
                  props.priority === "Urgent"? "red" :
                  props.priority === "High"? "pink":
                  props.priority === "Low"? "green": ""
              }
                >

            <Task td={props.completed? "w": ""}>{props?.task}</Task>

            <MoveHold>
            <Move1 bm1={`${bm1}`}
            onClick={()=>{
              createTask2(props)
              deleteTask(props.id)
              
              window.location.reload()
            }}
            >
              {move}
            </Move1>

            <Move2 bm2={`${bm2}`}
            onClick={()=>{
              createTask3(props)
              deleteTask2(props.id)
              
              window.location.reload()
            }}
            >
              {move2}
            </Move2>

            <Move3 bm3={`${bm3}`}
            onClick={()=>{
              createTask(props)
              deleteTask2(props.id)
              
              window.location.reload()
            }}
            >
              {move3}
            </Move3>

            <Move4 bm4={`${bm4}`}
            onClick={()=>{
              createTask2(props)
              deleteTask3(props.id)
              
              window.location.reload()
            }}
            >
              {move4}
            </Move4>

            </MoveHold>

            </Box>
              ))
            }

        </Main>
    </div>
  )
}

export default Card

const MoveHold = styled.div`
display: flex;
width: 90%;
/* background-color: red; */
justify-content: center;
`

const Move4 = styled.div<{bm4?: string}>`
padding: 10px 5px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({bm4})=> bm4};
color: white;
outline: none;
border-radius: 5px;
border: none;
margin-top: 20px;
margin-right: 5px;
margin-bottom: 10px;
cursor: pointer;

:hover{
    background-color: black;
}
`
const Move3 = styled.div<{bm3?: string}>`
padding: 10px 5px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({bm3})=> bm3};
color: white;
outline: none;
border-radius: 5px;
border: none;
margin-top: 20px;
margin-right: 5px;
margin-bottom: 10px;
cursor: pointer;

:hover{
    background-color: black;
}
`
const Move2= styled.div<{bm2?: string}>`
padding: 10px 5px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({bm2})=> bm2};
color: white;
outline: none;
border-radius: 5px;
margin-right: 5px;
border: none;
margin-top: 20px;
margin-bottom: 10px;
cursor: pointer;

:hover{
    background-color: black;
}
`
const Move1= styled.div<{bm1?: string}>`
padding: 10px 5px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({bm1})=> bm1};
color: white;
outline: none;
border-radius: 5px;
margin-right: 5px;
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