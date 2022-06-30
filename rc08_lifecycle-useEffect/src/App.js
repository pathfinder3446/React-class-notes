import LifeCycleMethods from './components/LifeCycleMethods';
import { useState } from 'react';
import UseEffectHook from './components/UseEffectHook'

function App() {

  const [show, setShow] = useState(true);
  console.log(show)


  return (
    <div className="container text-center mt-4">
      <button className='btn btn-dark' onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {/* {show && <LifeCycleMethods /> } */}
      {show && <UseEffectHook /> }
      
      
    </div>
  );
}

export default App;
