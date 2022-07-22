
import './Counter.css'
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{counter}</h1>
      <div>
        <button onClick={() => dispatch({type:'INCREMENT'})} className="counter-button positive">increase</button>
        <button onClick={() => dispatch({type:'RESET'})} className="counter-button zero">reset</button>
        <button onClick={() => dispatch({type:'DECREMENT'})} className="counter-button negative">decrease</button>
      </div>
    </div>
  );
};

export default Counter;
