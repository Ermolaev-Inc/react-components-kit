import React from "react";

import { NavbarSimpleProps } from "../Navbar";
import { NavbarSimpleWrapper } from "../NavbarStyles";

export const NavbarSimple: React.FC<Partial<NavbarSimpleProps>> = ({
  children,
  backgroundColor = "transparent",
  textColor = "#000000",
  ...props
}) => {
  return (
    <NavbarSimpleWrapper
      backgroundColor={backgroundColor}
      textColor={textColor}
      {...props}
    >
      {children}
    </NavbarSimpleWrapper>
  );
};
