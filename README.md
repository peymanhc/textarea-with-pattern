add style and own node into textarea



### `install Library`
npm i textarea-with-pattern
### `import`
import { AddPattern, TextAreaPattern } from 'textareawithpattern';
### `use Library`

```javascript
import { AddPattern, TextAreaPattern } from "textareawithpattern";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState<string>("")
  console.log("textarea value :", value)

  return (
    <div>
      <AddPattern
        seperator={"sec"}
        pattern={"first"}
        tagClass={"tagClass"}
        setValue={setValue}
        node={<button> Add Pattern</button>}
      />
      <TextAreaPattern
        setValue={setValue}
        node={<pre></pre>}
      />
    </div>
  );
}
```

### `description`
#### `seperator :`
Separator to separate pattern from text
#### `pattern :`
the relevant variable
#### `setValue :`
The state related to updating the value inside the textarea
#### `node :`
html tag for textarea and button (you can use your own styles there)
#### `tagClass :`
class of pattern section inside of textarea

