import React, { useState } from 'react';

interface CounterProps {
  initialValue?: number;
}

type CounterState = number;

export default function Counter({ initialValue }: CounterProps): JSX.Element {
  const [count, setCount] = useState<CounterState>(initialValue || 0);

  const onIncrement = () => {
    setCount(count + 1);
  };

  const onDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={onIncrement}>increment</button>
      <button onClick={onDecrement}>decrement</button>
    </div>
  );
}
