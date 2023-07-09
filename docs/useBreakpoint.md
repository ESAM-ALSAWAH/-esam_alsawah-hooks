# `useBreakpoint`

React hook that allows you to easily get the current breakpoint of the screen based on its width.
<br/>
<h5>
Default breakPoints
</h5>
<ul>   
    <li>  xl : 1440</li>          
    <li>  lg : 1024</li>          
    <li>  md : 768</li>          
    <li>  sm : 480</li>          
    <li>  xs : 0</li>                
</ul>

## Usage with default sizes

```jsx
import { useBreakpoint } from "@esam_alsawah/hooks";
const Demo = () => {
  const breakpoint = useBreakpoint();
  return <div>Your screen width is currently {breakpoint}.</div>;
};

```
## Usage with custom sizes

```jsx
import { useBreakpoint } from "@esam_alsawah/hooks";
const Demo = () => {
  const breakpoint = useBreakpoint({
    lg: 400,
    xl: 600,
  });
  return <div>Your screen width is currently {breakpoint}.</div>;
};
```