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
  borderShadowFocusColor: string;
}

export type InputProps = UserProps & InputStyles;