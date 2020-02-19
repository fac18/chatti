import styled from "styled-components";

const ActivitySummary = styled.section`

  border-bottom: 1px solid lightgrey;
  margin-left: 2em;
  padding: 2em 1em 2em 1em;

  .top-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
