## InputBox
**All attributes are optional**
```tsx
import React from "react";
import { InputBox } from "erck";

const Example = () => {
  return (
    <InputBox
      type="text"
      placeholder="Login"
      borderFocusColor="#79C7FF"
      borderShadowFocusColor="#b4e0ff"
    />
  );
};
```
| Type | Description | Default |
| ------------- | ------------- | ------------- |
| type  | `"text", "password"`  | `"text"` |
| placeholder | `string` | `Placeholder` |
| placeholderColor | `string` | `#E6E6E6` |
| placeholderWeight | `number` | `400` |
| fontFamily | `string` | `Roboto, Arial, serif` |
| fontSize  | `string`  | `18px` |
| textColor | `string` | `#ffffff` |
| textWeight | `number` | `400` |
| width | `string` | `280px` |
| height | `string` | `30px` |
| borderColor | `string` | `#E6E6E6` |
| borderFocusColor | `string` | `#79C7FF` |
| borderShadowFocusColor | `string` | - |

