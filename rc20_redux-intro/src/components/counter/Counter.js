
import './Counter.css'
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from '../../redux/actions/counterActions';

const Counter = () => {

  const dispatch = useDispatch();
  // const counter = useSelector(state => state.counter)
  const counter = useSelector((state) => state.counterRed.counter)

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{counter}</h1>
      <div>
        <button 
        // onClick={() => dispatch({type:'INCREMENT'})} 
        onClick={() => dispatch(increment())} 
        className="counter-button positive">increase</button>
        <button 
        // onClick={() => dispatch({type:'RESET'})} 
        onClick={() => dispatch(reset())} 
        className="counter-button zero">reset</button>
        <button 
        // onClick={() => dispatch({type:'DECREMENT'})} 
        onClick={() => dispatch(decrement())} 
        className="counter-button negative">decrease</button>
      </div>
    </div>
  );
};

export default Counter;
