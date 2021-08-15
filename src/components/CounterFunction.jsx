import { useState } from "react";
function CounterFunction(props) {
  let [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((count = count + 1));
  };
  return (
    <div>
      <p>This is a counter function {count}</p>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default CounterFunction;
