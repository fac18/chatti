import styled from "styled-components";


const Homepage = styled.section`
  background-color: #163c9b;
  color: white;

  .container-flex {
    padding: 2em 2em 3em 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 95vh;
  }

  .logo-container {
    margin-bottom: 1em;
  }

  .image-container {
    width: 200px;
    height: 200px;
  }

  h3.header-text {
    text-align: center;
    padding: 2em;
  }

  .header_tip {
    color: white;
    font-size: 0.8em;
    margin-top: 2em;
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
