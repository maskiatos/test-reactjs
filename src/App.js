import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';   //import MyComponent đã được định nghĩa và export từ MyComponent.js 

const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (    //gọi class MyComponent import vào dưới dạng thẻ
    <div>
      Hello World
      <MyComponent></MyComponent>   
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Hello World
    //     </p>
    //     <div>Count = {count}</div>
    //     <button onClick={() => dispatch(increaseCounter())}>Increase</button>
    //     <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
    //   </header>
    // </div>
  );
}

export default App;
