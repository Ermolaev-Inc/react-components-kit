import styled from "styled-components";
import { NavbarStyles } from "./Navbar";

export const NavbarWrapper = styled.div<NavbarStyles>`
  display: flex;
  align-items: center;
  justify-content: ${props => props.justifyContent};
  background-color: ${props => props.backgroundColor};
`;