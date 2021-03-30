import { Children, UserProps } from "../Interfaces";

export interface NavbarStyles {
  backgroundColor: string;
  textColor: string;
}

type NavbarProps = UserProps & Children;

export type NavbarSimpleProps = NavbarProps & NavbarStyles;

export type NavbarSimpleElementProps = UserProps & { title: string };
