import './App.css';
import Counter from './components/counter/Counter';
import Todo from './components/todo/Todo';
// import {createStore} from "redux";
import {Provider} from "react-redux";
import {getStore} from './redux';
import counterReducer from './redux/reducer/counterReducer';



function App() {

// const store = createStore(counterReducer)

  const store = getStore();

  return (
    <div className="app">
      <Provider store={store}>
         <Counter />
      {/* <Todo /> */}
      </Provider>
      
    </div>
  );
}

export default App;
