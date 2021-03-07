import styled from "styled-components";
import { NavbarSimple, NavbarStyles, NavbarStandartButtons } from "./Navbar";

export const NavbarWrapper = styled.div<NavbarSimple>`
  display: flex;
  align-items: center;
  justify-content: ${props => props.justifyContent};
  background-color: ${props => props.backgroundColor};
`;

export const NavbarStandartStyles = styled.div<NavbarStyles>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${props => props.backgroundColor};
`;

export const NavbarStandartButtonsStyles = styled.div<NavbarStandartButtons>`
  flex-basis: ${props => props.flexBasis};
  display: flex;
  justify-content: center;
`;