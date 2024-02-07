import { AddPattern, TextAreaPattern } from "./components";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="App">
      <AddPattern
        seperator={"%"}
        pattern={"first"}
        tagClass={"tagClass"}
        setValue={setValue}
        node={<button> Add Pattern</button>}
      />
      <TextAreaPattern
        setValue={setValue}
        node={<pre></pre>}
        classRoot="class"
      />
    </div>
  );
}

export default App;
