type ButtonTitle = {
  title: string;
};

type UserProps = {
  [name: string]: any;
}

export type SVGIcon = {
  svg?: string;
  svgWidth?: string;
  svgHeight?: string;
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

export type StandartProps = ButtonTitle & UserProps & SVGIcon;
export type ButtonProps = ButtonStyles & StandartProps;
export type ButtonRectProps = ButtonRectStyles & StandartProps;
export type ButtonRoundProps = ButtonRoundStyles & StandartProps;