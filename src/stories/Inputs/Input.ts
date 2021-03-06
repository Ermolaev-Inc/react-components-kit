import { UserProps, TextStyles } from "../Interfaces";

export type InputStyles = TextStyles & {
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