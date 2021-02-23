type UserProps = {
  [name: string]: any;
}

export interface InputStyles {
  type: "text" | "password";
  placeholder: string;
  placeholderColor: string;
  placeholderWeight: number;
  fontFamily: string;
  fontSize: string;
  textColor: string;
  textWeight: number;
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