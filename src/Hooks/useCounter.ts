import { useState, useEffect } from "react";

const useCounter = (isCounting: boolean) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let interval: undefined | number;

    if (isCounting) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 10);
      }, 10);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isCounting]);

  return count;
};

export default useCounter;
