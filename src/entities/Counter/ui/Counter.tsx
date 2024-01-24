import { counterActions } from '../model/slice/counterSlice'
import {
  useAppDispatch,
  useAppSelector,
} from 'app/providers/StorePrivider/config/store'
import { getCounterValue } from '../model/Selectors/getCounterValue/getCounterValue'

export const Counter = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(getCounterValue)

  const increment = () => {
    dispatch(counterActions.increment())
  }
  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}
