import { Children, UserProps } from "../Interfaces";

export interface NavbarStyles {
  backgroundColor: string;
  textColor: string;
}

type NavbarProps = UserProps & Children;

export type NavbarSimpleProps = NavbarProps & NavbarStyles;

export type NavbarElementProps = UserProps & { title: string };

// export type NavBarProps = UserProps & { children: React.ReactNode };
//
// export type NavbarSimpleProps = NavBarProps & NavbarSimple;
//
// export type NavbarStandartProps = NavBarProps & NavbarStyles;
//
// export type NavbarStandartLinkProps = SVGIcon & UserProps;
//
// export type NavbarStandartButtonsProps = NavBarProps & NavbarStandartButtons;
