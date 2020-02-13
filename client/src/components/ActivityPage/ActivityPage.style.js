import styled from "styled-components";

const ActivityPage = styled.section`
  padding-bottom: 4rem;

  .summary-container {
    display: flex;
    flex-direction: row;
    background-color: #f5f8fd;
  }

  .details-container {
    display: flex;
    flex-direction: column;
  }

  .row-container {
    display: flex;
    flex-direction: row;
  }

  .activity-preview {
    width: 50%;
  }

  .activity-description {
    padding: 1rem;
    font-size: 14px;
  }
`;

export { ActivityPage };
