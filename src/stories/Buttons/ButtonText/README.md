# ButtonText
**All attributes are optional**
## Usage
```tsx
import React from "react";
import { ButtonText } from "erck";

const Example = () => {
  return (
    <ButtonText 
      title="Home"
      fontSize="14px"
    />
  );
};
```
## All Attributes 
| Type | Description | Default |
| ------------- | ------------- | ------------- |
| title  | `string`  | `OK` |
| fontFamily | `string` | `Roboto, Arial, serif` |
| fontSize  | `string`  | `18px` |
| textColor | `string` | `#ffffff` |
| textWeight | `number` | `400` |
| svg | `string` | `null` |
| svgWidth | `string` | `40px` |
| svgHeight | `string` | `20px` |
<br>

## With SVG icon
```tsx
import React from "react";
import { ButtonText } from "erck";

import confirmIcon from "../../img/confirm.svg";

const Example = () => {
  return (
    <ButtonText
      svg={confirmIcon}
    />
  );
};
```
## Attributes for SVG icon
**You can use previous attributes with svg icon**

| Type | Description | Default |
| ------------- | ------------- | ------------- |
| svg | `string` | `null` |
| svgWidth | `string` | `40px` |
| svgHeight | `string` | `20px` |
