# Button
**All attributes are optional**
```tsx
import React from "react";
import { Button } from "erck";

const Example = () => {
  return (
    <Button 
      title="Confirm"
      backgroundColor="#9CEE90"
    />
  );
};
```
| Type | Description | Default |
| ------------- | ------------- | ------------- |
| title  | `string`  | `OK` |
| fontFamily | `string` | `Roboto, Arial, serif` |
| fontSize  | `string`  | `18px` |
| textColor | `string` | `#ffffff` |
| textWeight | `number` | `400` |
| backgroundColor | `string` | `#79c7ff` |

## Themes Config [Experimental]
[What is Themes Config?](soon)

### Usage
```tsx
import React from "react";
import { Button, ButtonThemes } from "erck";

const Example = () => {
  const themes: ButtonThemes = {
    light: {
      fontFamily: "Roboto",
      fontSize: "24px",
      textColor: "white",
      textWeight: 400,
      backgroundColor: "red",
    },
    dark: {
      fontFamily: "Roboto",
      fontSize: "24px",
      textColor: "black",
      textWeight: 400,
      backgroundColor: "blue",
    }
  };

  return (
    <Button
      title="OK"
      themesConfig={themes}
      currentTheme={localStorage.getItem("theme")}
    />
  );
};
```

### Manual
1. Import Button and ButtonThemes from erck

``import { Button, ButtonThemes } from "erck";``
2. Create an object that will store your themes. The type of this object must be `ButtonThemes`

``` tsx
const themes: ButtonThemes = {
    firstThemeName: {
        param1: value1,
        param2: value2, 
    },
    secondThemeName: {
        param1: differentValue1,
    }
};
```
3. Return Button with `themesConfig` and `currentTheme` attributes

```tsx
return (
  <Button 
    themesConfig={themes}
    currentTheme="firstThemeName"
  />
);
```
