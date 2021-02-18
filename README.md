![Full HD](https://user-images.githubusercontent.com/57585370/107795453-7ae1fb00-6d7a-11eb-8b98-c86154149a8d.png)

<div align="center">
  
![Downloads](https://img.shields.io/npm/dm/erck?style=for-the-badge)
![GHVersion](https://img.shields.io/github/v/release/Ermolaev-Inc/react-components-kit?style=for-the-badge)
![Version](https://img.shields.io/npm/v/erck?style=for-the-badge)
![License](https://img.shields.io/npm/l/erck?style=for-the-badge)
</div>

## Installation
React Components Kit is available as an [npm package](https://www.npmjs.com/package/erck)

```
npm i erck --save
```

## Usage
``` tsx
import React from "react";
import { Input } from "erck";

export const Home: React.FC = () => {
  return (
    <Input placeholder="login" />
  );  
};
```

## Themes Config
If your application has themes, 
you can use the Themes Config feature 
built into react-components-kit <br>
Check out the [documentation](soon) about Themes Config
``` tsx
import React from "react";
import { Button, ButtonThemeConfig } from "erck";

export const Home: React.FC = () => {
  const buttonTheme: ButtonThemeConfig = {
    light: {
      backgroundColor: "red",
      textColor: "white"
    },
    dark: {
      backgroundColor: "blue"
    }
  };
  
  return (
    <Button themeConfig={buttonTheme} currentTheme={localStorage.getItem("theme")} />
  );    
};
```

## Documentation
Soon

## Components
- [Input](https://github.com/Ermolaev-Inc/react-components-kit/tree/master/src/stories/Input)
- [Button](https://github.com/Ermolaev-Inc/react-components-kit/tree/master/src/stories/Button)
- [TextButton](https://github.com/Ermolaev-Inc/react-components-kit/tree/master/src/stories/TextButton)

## License
This project is licensed under the terms of the [MIT license](https://github.com/Ermolaev-Inc/react-components-kit/blob/master/LICENSE)
