import { useState } from "react";
function CounterFunction(props) {
  let [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((count = count + 1));
  };
  const handleDecrement = () => {
    setCount((count = count - 1));
  };

  return (
    <div>
      <p>
        {props.text} {count}
      </p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default CounterFunction;
