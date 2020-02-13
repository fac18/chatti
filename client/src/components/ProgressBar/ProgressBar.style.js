import styled from "styled-components";

const ProgressBar1 = styled.div`
  
    display: flex;           
    justify-content: space-around; 
  
  .step {
    display: flex;           
    flex-direction: column;  
    justify-content: center; 
    align-items: center;     
    height: 90px;
  }

  .step_description {
    text-align: center;
    color: white;
  }

  .white {    
    background-color: white;
  }

  .active {
    border: 2px solid #26E2E2;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin-bottom: 0.7em;
  }

  .ticked {
    padding-left: 12px;
    padding-top: 5px;
  }
  .highlighted {
    color: #26E2E2;
  }

  .circle {
    width: 40px;
    height: 40px;
    border: 1px solid white;
    border-radius: 100%;
    margin-bottom: 0.7em;
  }

  .blue {
    background-color: #163C9B;
  }

  
`;

export { ProgressBar1 };
