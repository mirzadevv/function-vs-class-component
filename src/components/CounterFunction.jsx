import { useState } from "react";
function CounterFunction(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>This is a counter function {count}</p>
    </div>
  );
}

export default CounterFunction;
