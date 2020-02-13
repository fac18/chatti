import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.nav`
  background-color: #ffc000;
  position: fixed;
  bottom: 0;
  width: 100%;

  ul {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0.8rem;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }

  li p {
    font-size: 10px;
    text-align: center;
    font-weight: bold;
    color: #163c9b;
    text-transform: uppercase;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export { Navbar, StyledLink };
