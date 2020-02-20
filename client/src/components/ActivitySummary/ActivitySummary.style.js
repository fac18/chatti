import styled from "styled-components";

const ActivitySummary = styled.section`

  border-bottom: 1px solid lightgrey;
  margin: 0 auto;
  padding: 2em 1em 2em 1em;

  .activity-main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
   
  .top-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .centre-container {
    display: flex;
    flex-direction: row;
  }

  .row-container {
    display: flex;
    flex-direction: row;
    margin-bottom: 1em;
  }

  .activity-preview {
    width: 70%;
    margin-left: 2em;
  }


`;
export { ActivitySummary };
