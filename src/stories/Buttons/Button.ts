type ButtonTitle = {
  title: string;
};

type UserProps = {
  [name: string]: any;
}

export interface ButtonStyles {
  fontFamily?: string;
  fontSize?: string;
  textColor?: string;
  textWeight?: number;
}

export interface ButtonRectStyles extends ButtonStyles {
  backgroundColor?: string;
}

export interface ButtonRoundStyles extends ButtonRectStyles {
  diameter: string;
}

export type ButtonProps = ButtonTitle & UserProps & ButtonStyles
export type ButtonRectProps = ButtonTitle & UserProps & ButtonRectStyles;
export type ButtonRoundProps = ButtonTitle & UserProps & ButtonRoundStyles;