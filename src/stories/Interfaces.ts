import React from "react";

export type UserProps = {
  [name: string]: any;
}

export type Children = {
  children: React.ReactNode;
}

export interface FontStyle {
  fontFamily: string;
  fontSize: string;
  textColor: string;
  textWeight: number;
}
