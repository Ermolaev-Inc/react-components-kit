import React from "react";
import { NavbarSimpleProps } from "../Navbar";
import { NavbarWrapper } from "../NavbarStyles";

export const NavbarSimple: React.FC<Partial<NavbarSimpleProps>> = ({ 
  children,
  backgroundColor = "transparent",
  justifyContent = "center"
}) => {
  return (
    <NavbarWrapper 
      backgroundColor={backgroundColor}
      justifyContent={justifyContent}
    >
      {children}
    </NavbarWrapper>
  );
};