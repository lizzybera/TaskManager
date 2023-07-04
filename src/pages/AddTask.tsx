import React from 'react'
import styled from 'styled-components'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { createTask } from '../utils/API';
import {v4 as uuidv4} from "uuid"

const AddTask = () => {
    const model = yup.object({
        task : yup.string().required(),
        priority : yup.string().required()
    })

    const { 
        register, 
        formState:{ errors },
        handleSubmit, 
        reset
    } = useForm({
        resolver: yupResolver(model)
      });


    const handleMySubmission = handleSubmit((res)=>{
        
        createTask({
            id: uuidv4(),
            task: res.task,
            priority: res.priority,
            completed: false
        })

        reset()
    })

  return (
    <div>
        <Container>
            <Main
            onSubmit={handleMySubmission}
            >
                <Input placeholder='Enter Task'
                {...register('task')}
                />
                <Error>{errors.task && "please enter your task"}</Error>

                <Input placeholder='enter priority'
                    {...register('priority')}
                />
                <Error>{errors.priority && "please enter priority"}</Error>
            <Button type='submit'>Add Task</Button>
            </Main>
        </Container>
    </div>
  )
}

export default AddTask

const Error = styled.div`
color: red;
`
const Button = styled.button`
padding: 10px 15px;
display: flex;
justify-content: center;
align-items: center;
background-color: blue;
color: white;
outline: none;
border-radius: 5px;
border: none;
margin-top: 20px;
cursor: pointer;

:hover{
    background-color: black;
}
`

const Input = styled.input`
width: 300px;
height: 40px;
outline: none;
border: 1px solid blue;
padding-left: 10px;
border-radius: 7px;
color: blue;
margin-top: 20px;

:hover{
    border-color: gray;
}

::placeholder{
    color: blue;
}
`

const Main = styled.form`
width: 90%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    /* flex-direction: column; */
    align-items: center;
    margin-top: 20px;
`