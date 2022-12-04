import React, { useState } from "react";

type Props = {};
const Counter = (props: Props) => {
  const [count, setCount] = useState<number>(0);
  const onIncrementClick = () => setCount((prevState: number) => prevState + 1);
  return (
    <>
      <button onClick={onIncrementClick}>Change count ({count})</button>
    </>
  );
};

export default Counter;
