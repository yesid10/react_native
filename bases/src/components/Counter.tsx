import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const incrementBy = (value: number) => {
    // setCount(count + value);
    // setCount((current) => current + value);
    setCount(Math.max(value + count, 0));
  };

  return (
    <>
      <h3 className="text-2xl mb-3">
        Contador <small className="font-bold">{count}</small>
      </h3>
      <div className="flex gap-3">
        <button
          className="text-center text-white font-bold p-3 bg-blue-500 rounded-xl cursor-pointer hover:bg-blue-700 transition-all duration-100"
          onClick={() => incrementBy(+1)}
        >
          +1
        </button>
        <button
          className="text-center text-white font-bold p-3 bg-blue-500 rounded-xl cursor-pointer hover:bg-blue-700 transition-all duration-100"
          onClick={() => incrementBy(-1)}
        >
          -1
        </button>
      </div>
    </>
  );
};

export default Counter;
