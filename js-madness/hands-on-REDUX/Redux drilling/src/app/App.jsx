import { increment, decrement, incrementByValue } from "../features/counter/counterslice"
import { useSelector, useDispatch } from "react-redux"

function App(){
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return(
     <div>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementByValue(5))}>+5</button>
    </div>
  )
}

export default App