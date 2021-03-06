# NavbarSimple
## Usage
<img width="1440" alt="Screenshot 2021-03-07 at 02 19 08" src="https://user-images.githubusercontent.com/57585370/110221043-9e1c4800-7eeb-11eb-809f-b5eb879fbb0b.png">

```tsx
import React from "react";
import { NavbarSimple, ButtonRound } from "erck";

const Example = () => {
  return (
    <NavbarSimple>
      <ButtonRound title="First" />
      <ButtonRound title="Second" />
      <ButtonRound title="Third" />
      <ButtonText title="Fourth" />
      <ButtonText title="Fifth" />
    </NavbarSimple>
  );
};
```

## All Attributes 
**All attributes are optional**
| Type | Description | Default |
| ------------- | ------------- | ------------- |
| backgroundColor  | `string`  | `transparent` |
| justifyContent | `string` | `center` |
<br>
