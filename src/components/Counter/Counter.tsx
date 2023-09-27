import {useState} from "react";
import s from './Counter.module.scss'

interface CounterProps {
  className?: string
}

export const Counter = ({}: CounterProps) => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(prev => prev + 1)
  }
  const decrementCount = () => {
    setCount(prev => prev - 1)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={incrementCount}>+</button>
      <button className={s.button} onClick={decrementCount}>-</button>
    </>
  );
};
