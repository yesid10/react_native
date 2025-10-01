import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState<number>(0);

  const incrementBy = (value: number) => {
    // setCount(count + value);
    // setCount((current) => current + value);
    setCount(Math.max(value + count, 0));
  };

  return {
    //Propperties
    count,

    //Actions
    incrementBy,
  };
};

export default useCounter;
