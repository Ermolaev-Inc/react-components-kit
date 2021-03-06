# ButtonRound
## Usage
```tsx
import React from "react";
import { ButtonRound } from "erck";

const Example = () => {
  return (
    <ButtonRound
      title="OK"
      backgroundColor="#9CEE90"
    />
  );
};
```
## All Attributes 
**All attributes are optional**
| Type | Description | Default |
| ------------- | ------------- | ------------- |
| title  | `string`  | `OK` |
| diameter | `string` | `40px` |
| fontFamily | `string` | `Roboto, Arial, serif` |
| fontSize  | `string`  | `18px` |
| textColor | `string` | `#ffffff` |
| textWeight | `number` | `400` |
| backgroundColor | `string` | `#79c7ff` |
| svg | `string` | `null` |
| svgWidth | `string` | `40px` |
| svgHeight | `string` | `20px` |
<br>

## With SVG icon
```tsx
import React from "react";
import { ButtonRound } from "erck";

import confirmIcon from "../../img/confirm.svg";

const Example = () => {
  return (
    <ButtonRound 
      svg={confirmIcon}
      backgroundColor="#9CEE90"
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
