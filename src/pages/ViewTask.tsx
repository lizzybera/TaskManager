import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from '../components/static/Card'
import { readTask, readTask2, readTask3,  } from '../utils/API'
// import Card2 from '../components/static/Card2'

const ViewTask = () => {

  const [state, setState] = useState<any>([])
  const [state2, setState2] = useState<any>([])
  const [state3, setState3] = useState<any>([])

  useEffect(() => {
        readTask().then((res:any)=>{
          return setState(res)
        })

        readTask2().then((res:any)=>{
          return setState2(res)
        })

        readTask3().then((res:any)=>{
          return setState3(res)
        })
  }, [])

  return (
    <div>
        <Container>
           <Main>
            <Card 
            title='Do Task'
            data={state}
            move='Do process'
            />
            <Card 
            title='Do Process'
            data={state2}
            move2='Do Done'
            bm2='black'
            move3='Do Task'
            />
            <Card 
            title='Done Task'
            data={state3}
            move4='Do Process'
            />
           </Main>
        </Container>
    </div>
  )
}

export default ViewTask

const Main = styled.div`
display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 90%;
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
`