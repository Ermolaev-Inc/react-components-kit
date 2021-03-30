import React from "react";
import styled from "styled-components";

import { NavbarSimpleElementTitle } from "../NavbarStyles";

const Title = styled.span`
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

export const NavbarSimpleElement = ({ title = "Element" }: { title?: string }) => {
  return (
    <NavbarSimpleElementTitle>
      {title}
    </NavbarSimpleElementTitle>
  );
};
