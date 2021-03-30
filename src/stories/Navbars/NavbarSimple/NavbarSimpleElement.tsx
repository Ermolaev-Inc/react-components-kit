import React from "react";

import { NavbarSimpleElementProps } from "../Navbar";
import { NavbarSimpleElementTitle } from "../NavbarStyles";

export const NavbarSimpleElement: React.FC<Partial<NavbarSimpleElementProps>> = ({
  title = "Element",
  ...props
}) => {
  return (
    <NavbarSimpleElementTitle {...props}>
      {title}
    </NavbarSimpleElementTitle>
  );
};
