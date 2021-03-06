import React from "react";

import { UserProps } from "../Interfaces";

export interface NavbarStyles {
  justifyContent: string;
  backgroundColor: string;
}

export type NavbarSimpleProps = UserProps &
  NavbarStyles & { children: React.ReactNode };
