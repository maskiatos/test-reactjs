import logo from './logo.svg';
import './App.scss'; //không nên dùng css, nên dùng sass cài đặt bằng lệnh npm install --save-exact sass@1.53.0, sass có đuôi .scss
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';   //import MyComponent đã được định nghĩa và export từ MyComponent.js 
import React from 'react';    //tương tự như MyComponent.js, import cái này để sử dụng component

class App extends React.Component{  //khai báo App kiểu class component
  render(){
    return(
      <div>
        Hello World
        <MyComponent></MyComponent>   {/*gọi class MyComponent import vào dưới dạng thẻ*/}
      </div>
    )
  }
}
// const App = () => {   //khai báo App kiểu function component
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();
//   return (    
//     <div>
//       Hello World
//       <MyComponent></MyComponent> 
//     </div>
//   );
// }

// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (    
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello World
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }

export default App;
