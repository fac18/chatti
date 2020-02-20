import styled from 'styled-components'

const PlayerContainer = styled.div`
  // .player {
  //   width: 500px;
  //   height: 460px;
  // }

  .wrapper {
    position: relative;
    padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
  }

  .player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export default PlayerContainer
