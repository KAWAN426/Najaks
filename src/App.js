import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Hahyun from './pages/Hahyun'
import Mangryeong from './pages/Mangryeong'
import Sanghyeon from './pages/Sanghyeon'

const Container = styled.div`
  width:100%;
  min-height:100%;
`

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sanghyeon" element={<Sanghyeon />} />
        <Route path="/hahyun" element={<Hahyun />} />
        <Route path="/mangryeong" element={<Mangryeong />} />
      </Routes>
    </Container>
  )
}

export default App
