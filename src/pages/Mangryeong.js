import styled from 'styled-components'
import { useEffect } from 'react';
import { Link } from 'react-router-dom/dist';
function Mangryeong() {
  const streamers = [
    {
      name: "김치만두",
      id: "cman0327"
    },
    {
      name: "곽춘식",
      id: "realchunshik"
    }, {
      name: "왁파고",
      id: "wakphago"
    }, {
      name: "권민",
      id: "kwonmin98"
    }, {
      name: "단답벌레",
      id: "dandapbug"
    }
  ]
  function initTwitchPlayer({ id }) {
    const { clientWidth } = document.body;
    let count = 1;
    if (clientWidth > 700) count = 2;
    if (clientWidth > 1400) count = 3;

    const width = document.body.clientWidth / count - 10 - (10 * count);
    const height = width / 16 * 9;
    var twitchPlayer = new Twitch.Player(id, {
      channel: id,
      width: width,
      height: height,
      autoplay: false
    });
    twitchPlayer.setVolume(0.5);
  }

  useEffect(() => {
    streamers.forEach((value) => {
      if (document.getElementById(value.id)) return;
      const player = document.createElement('div')
      player.id = value.id
      player.style.margin = "10px";
      document.getElementById("cont").appendChild(player)
      initTwitchPlayer({ id: value.id });
    })
  }, [])

  return (
    <Container>
      <Nav>
        <Link to="/"><h2>Back</h2></Link>
        <h1>나작스 망령</h1>
        <h1></h1>
      </Nav>
      <Cont id='cont' />
    </Container>
  )
}

const Container = styled.div`
  width:100%;
  min-height:100%;
  display:flex;
  flex-direction: column;
`
const Cont = styled.div`
  display:flex;
  flex-wrap: wrap;
`
const Nav = styled.nav`
  width:calc(100% - 60px);
  padding: 20px 30px;
  font-size: 20px;
  border-bottom: 2px solid #242424;
  display:flex;
  justify-content: space-between;
`

export default Mangryeong
