import styled from 'styled-components'

const Favourite = styled.section`
  display: flex;
  flex-direction: row;

  .activity-preview-container {
    object-fit: cover;
    width: 1000%;
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
  }

  .activity-preview {
    width: 100%;
  }

  .right-container {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }

  .top-container {
    display: flex;
    flex-direction: row;
  }
`

export { Favourite }
