import { useEffect } from 'react';
import { Link } from 'react-router-dom/dist';
import styled from 'styled-components'

function Sanghyeon() {
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
      name: "비밀소녀",
      id: "secretmemolee"
    }, {
      name: "해루석",
      id: "rusuk_"
    }, {
      name: "권민",
      id: "kwonmin98"
    }, {
      name: "히키킹",
      id: "hikiking0"
    }, {
      name: "융터르",
      id: "carnarjungtur"
    }, {
      name: "도파민 박사",
      id: "dopamine_dr"
    }, {
      name: "뢴트게늄",
      id: "111roentgenium"
    }, {
      name: "비지니스 킴",
      id: "businesskim111"
    }, {
      name: "독고혜지",
      id: "dokkhye_"
    }, {
      name: "소피아",
      id: "ssoph25"
    }, {
      name: "프리터",
      id: "freeter1999"
    }, {
      name: "단답벌레",
      id: "dandapbug"
    }, {
      name: "하쿠",
      id: "haku_0089_"
    },
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
        <h1>나작스 전체</h1>
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

export default Sanghyeon
