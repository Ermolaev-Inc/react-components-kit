import React from "react";
import { NavbarStandartLinkProps } from "../Navbar";

export const NavbarStandartLink: React.FC<NavbarStandartLinkProps> = ({
  src,
  width,
  height,
  ...props
}) => {
  return (
    <img src={src} width={width} height={height} {...props} />
  );
};