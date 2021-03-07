import React from "react";

import { UserProps } from "../Interfaces";

export interface NavbarStyles {
  backgroundColor: string;
}

export interface NavbarSimple extends NavbarStyles {
  justifyContent: string;
}

export interface SVGIcon {
  src: string;
  width: string;
  height: string;
}

export interface NavbarStandartButtons {
  flexBasis: string;
}

export type NavBarProps = UserProps & { children: React.ReactNode };

export type NavbarSimpleProps = NavBarProps & NavbarSimple;

export type NavbarStandartProps = NavBarProps & NavbarStyles;

export type NavbarStandartLinkProps = SVGIcon & UserProps;

export type NavbarStandartButtonsProps = NavBarProps & NavbarStandartButtons;
