import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; //để điều hướng trang web
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomePage from './components/Home/Homepage';

const root = ReactDOM.createRoot(document.getElementById('root')); //tạo Root cho phần tử có id "root" ở index.html
root.render(  //sau đó nhúng tất cả code vào cái phần tử có id "root" đấy bên index.html rồi hiển thị ra
  <Provider store={store}>
    {/* <React.StrictMode>  */}
      {/*enable StrictMode, cái này để highlight potential problem, không hiện ra UI, chỉ hiện trong console.log*/}
      {/*nó chỉ tác dụng ở local, không tác dụng trên production build, giờ tạm comment nó để dễ nhìn console.log*/}
      <BrowserRouter> {/* để <App/> trong này để BrowserRouter vừa import vào có thể điều hướng trang trong <App/> */}
        <Routes> {/*import ở trên, để điều hướng trang */}
          <Route path="/" element={<App />}> {/*path mặc định lúc mở web lên là gọi component App*/}
            <Route index element={<HomePage />}/> 
            {/*Route index mặc định mở ra lúc mở web khi không có path nào dưới được gọi ra outlet, không cần khai báo path*/}
            <Route path="users" element={<User />}/> {/*path phải giống với cái Link to bên App.js, và gọi component nào thì cho vào element*/}
            <Route path="admins" element={<Admin />}/> {/*những path này xuất hiện ở đâu thì nó gọi element đấy, ở đây là ở Header*/}
          </Route>
        </Routes>
      </BrowserRouter>
    {/* </React.StrictMode>  */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
