# `useColorScheme`

detects the color scheme of the user's system.


## Usage 

```jsx
import { useColorScheme } from "@esam_alsawah/hooks";
const Demo = () => {
    const colorSchema = useColorScheme();
    return <div>Your system is currently in {colorSchema} mode</div>;
};


```

