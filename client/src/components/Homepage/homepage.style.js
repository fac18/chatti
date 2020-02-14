import styled from "styled-components";


const Homepage = styled.section`
  background-color: #163c9b;
  color: white;

  .container-flex {
    padding-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 85vh;
  }

  h3.header-text {
    text-align: center;
    padding: 2em;
  }

  footer {
    display: flex;           
    flex-direction: column;  
    justify-content: center; 
    align-items: center;     
    height: 100px;
  }

  footer p {
    text-align: center;
    font-family: Lato;
    padding-bottom: 1rem;
  }
`;
export { Homepage };
