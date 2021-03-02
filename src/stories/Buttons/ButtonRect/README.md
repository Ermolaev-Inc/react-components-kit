# ButtonRect
**All attributes are optional**
## Usage
```tsx
import React from "react";
import { ButtonRect } from "erck";

const Example = () => {
  return (
    <ButtonRect 
      title="Confirm"
      backgroundColor="#9CEE90"
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
| backgroundColor | `string` | `#79c7ff` |
| svg | `string` | `null` |
| svgWidth | `string` | `40px` |
| svhHeight | `string` | `20px` |
<br>
## With SVG icon
```tsx
import React from "react";
import { ButtonRect } from "erck";

import confirmIcon from "../../img/confirm.svg";

const Example = () => {
  return (
    <ButtonRect 
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
| svhHeight | `string` | `20px` |