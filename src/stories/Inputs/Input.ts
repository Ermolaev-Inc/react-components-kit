import { UserProps, FontStyle } from "../Interfaces";

export type InputStyles = FontStyle & {
  type: "text" | "password";
  placeholder: string;
  placeholderColor: string;
  placeholderWeight: number;
  width: string;
  height: string;
  borderColor: string;
  borderFocusColor: string;
}

export interface InputBoxStyles extends InputStyles {
  borderShadowFocusColor: string | null;
}

export type InputProps = UserProps & InputStyles;
export type InputBoxProps = InputProps & InputBoxStyles;
