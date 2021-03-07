import React from "react";
import { NavbarStandartButtonsProps } from "../Navbar";
import { NavbarStandartButtonsStyles } from "../NavbarStyles";

export const NavbarStandartButtons: React.FC<Partial<NavbarStandartButtonsProps>> = ({
  children,
  flexBasis = "80%"
}) => {
  return (
    <NavbarStandartButtonsStyles flexBasis={flexBasis}>
      {children}
    </NavbarStandartButtonsStyles>
  );
};