type ButtonTitle = {
  title: string;
};

type UserProps = {
  [name: string]: any;
}

interface ButtonStyles {
  fontFamily?: string;
  fontSize?: string;
  textColor?: string;
  textWeight?: number;
}

interface ButtonRectStyles extends ButtonStyles {
  backgroundColor?: string;
}

interface ButtonRoundStyles extends ButtonRectStyles {
  diameter: string;
}

export type ButtonRectProps = ButtonStyles & UserProps & ButtonRectStyles;
export type ButtonRoundProps = ButtonStyles & UserProps & ButtonRoundStyles;