import Header from './Header'
// import Sider from './Sider'
import { Outlet } from 'react-router-dom'
import styled from "styled-components"

const LayOut = () => {
    return (
        <Main>
            {/* <Sider /> */}
            <Container>
                <Header />
                <Outlet />
            </Container>
        </Main>
    )
}

export default LayOut

const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`
const Main = styled.div`
width: 100%;
display: flex;
`