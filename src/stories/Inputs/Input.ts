type UserProps = {
  [name: string]: any;
}

export interface InputStyles {
  type: "text" | "password";
  placeholder: string;
  placeholderColor: string;
  placeholderWeight: string;
  fontFamily: string;
  fontSize: string;
  textColor: string;
  textWeight: number;
  width: string;
  height: string;
  borderColor: string;
  borderFocusColor: string;
}

export type InputProps = UserProps & InputStyles;