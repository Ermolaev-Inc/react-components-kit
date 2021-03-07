import React from "react";
import { NavbarStandartProps } from "../Navbar";
import { NavbarStandartStyles } from "../NavbarStyles";

export const NavbarStandart: React.FC<Partial<NavbarStandartProps>> = ({
  children,
  backgroundColor = "transparent",
  ...props
}) => {
  return (
    <NavbarStandartStyles backgroundColor={backgroundColor} {...props}>
      {children}
    </NavbarStandartStyles>
  );
};