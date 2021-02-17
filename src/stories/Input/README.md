## Input
**All attributes are optional**
```tsx
import React from "react";
import { Input } from "erck";

const Example = () => {
  return (
    <Input 
      type="text" 
      placeholder="Login"
    />
  );
};
```
| Type | Description | Default |
| ------------- | ------------- | ------------- |
| type  | `"text"` `"password"`  | `"text"` |
| placeholder  | `string`  | `Placeholder` |
| fontFamily | `string` | `Roboto, Arial, serif` |
| fontSize | `string` | `24px` |
| textColor | `string` | `#000000` |
| textWeight | `number` | `400` |
| placeholderWeight | `number` | `400` |
| borderColor | `string` | `#e6e6e6` |
| borderFocusColor | `string` | `#79c7ff` |
