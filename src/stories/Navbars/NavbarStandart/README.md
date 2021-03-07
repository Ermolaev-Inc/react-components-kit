# NavbarStandart
## Usage
```tsx
import React from "react";
import { 
  NavbarStandart, 
  NavbarStandartLink, 
  NavbarStandartButtons,
  ButtonText
} from "erck";

import logoIcon from "../logo.svg";
import ghIcon from "../github.svg";
import twitterIcon from "../twitter.svg";

const Example = () => {
  return (
    <NavbarStandart>
      <NavbarStandartLink 
        src={logoIcon} 
        width="30px" 
        height="30px"
      />
      <NavbarStandartButtons>
        <ButtonText title="First" />
        <ButtonText title="Second" />
        <ButtonText title="Third" />
        <ButtonText title="Fourth" />
      </NavbarStandartButtons>
      <NavbarStandartLink 
        src={ghIcon} 
        width="30px" 
        height="30px"
      />
      <NavbarStandartLink 
        src={twitterIcon} 
        width="30px" 
        height="30px" 
      />
    </NavbarStandart>
  );
};
```
## NavbarStandart Attributes 
**All attributes are optional**
| Type | Description | Default |
| ------------- | ------------- | ------------- |
| backgroundColor  | `string`  | `transparent` |
<br>

## NavbarStandartLink Attributes
**All attributes are not optional**
| Type | Description |
| ------------- | ------------- |
| src  | `string`  |
| width | `string` |
| height | `string` |
<br>

## NavbarStandartButtons
**All attributes are optional**
| Type | Description | Default |
| ------------- | ------------- | ------------- |
| flexBasis  | `string`  | `80%` |
