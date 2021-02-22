export type ButtonTitle = {
  title: string;
};

export type UserProps = {
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

export type ButtonRectProps = ButtonStyles & UserProps & ButtonRectStyles;
export type ButtonRoundProps = ButtonStyles & UserProps & ButtonRoundStyles;