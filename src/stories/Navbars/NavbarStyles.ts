import styled from "styled-components";
import { NavbarStyles } from "./Navbar";

export const NavbarSimpleWrapper = styled.div<NavbarStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
  :nth-child(n) {
    color: ${props => props.textColor};
  }
`;

export const NavbarSimpleElementTitle = styled.span`
  display: block;
  font-family: Roboto,serif;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  padding: 15px 30px;
  transition: 0.5s;
  :hover {
    opacity: 50%;
  }
`;

// export const NavbarStandartStyles = styled.div<NavbarStyles>`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   background-color: ${props => props.backgroundColor};
// `;
//
// export const NavbarStandartButtonsStyles = styled.div<NavbarStandartButtons>`
//   flex-basis: ${props => props.flexBasis};
//   display: flex;
//   justify-content: center;
// `;
