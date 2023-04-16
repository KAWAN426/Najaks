import styled from 'styled-components'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <Nav>
        <h1>나의 작은 스트리머</h1>
      </Nav>
      <LinkCont>
        <Link to="/sanghyeon">
          <h1>상현</h1>
        </Link>
        <Link to="/hahyun">
          <h1>하현</h1>
        </Link>
        <Link to="/mangryeong">
          <h1>망령</h1>
        </Link>
      </LinkCont>
    </Container>
  )
}

const Container = styled.div`
  width:100%;
  min-height:100%;
`
const Nav = styled.nav`
  width:calc(100% - 60px);
  padding: 20px 30px;
  font-size: 20px;
  border-bottom: 2px solid #242424;
  display:flex;
  align-items: center;
  justify-content: center;
`
const LinkCont = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1{
    padding: 30px;
    font-size: 12vw;
  }
`

export default Home
