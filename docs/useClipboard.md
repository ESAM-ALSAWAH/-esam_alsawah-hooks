# `useClipboard`

Copy text to a user's clipboard.


## Usage 

```jsx
import { useClipboard } from "@esam_alsawah/hooks";
const Demo = () => {
  const [text, setText] = React.useState("");
  const { copied, copy } = useClipboard();

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button type="button" onClick={() => copy(text)}>
        copy text
      </button>
      <span>{copied && "copied"}</span>
    </div>
  );
};


```

<h4>To change the duration for showing word 'copied' </h4>

```jsx
const { copied, copy } = useClipboard({ timeout: 400 });
``````