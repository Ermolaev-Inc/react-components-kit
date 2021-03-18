import { UserProps, FontStyle } from "../Interfaces";

type ButtonTitle = {
  title: string;
};

export type SVGIcon = {
  svg: string;
  svgWidth: string;
  svgHeight: string;
}

export type ButtonRectStyles = FontStyle & {
  backgroundColor: string;
};

export interface ButtonRoundStyles extends ButtonRectStyles {
  diameter: string;
}

export type StandartProps = ButtonTitle & UserProps & SVGIcon & FontStyle;
export type ButtonProps = StandartProps;
export type ButtonRectProps = ButtonRectStyles & StandartProps;
export type ButtonRoundProps = ButtonRoundStyles & StandartProps;
