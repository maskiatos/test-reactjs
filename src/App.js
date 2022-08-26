//bên git branch dev thì không có router với bootstrap thì nó phải import nhiều, bên này chỉ cần import App.scss
//cài router, boostrap, react bootstrap bằng lệnh npm install --save-exact react-router-dom@6.3.0 bootstrap@5.2.0 react-bootstrap@2.4.0
import './App.scss'; //không nên dùng css, nên dùng sass cài đặt bằng lệnh npm install --save-exact sass@1.53.0, sass có đuôi .scss
import Header from './components/Header/Header';
import { Link, Outlet } from "react-router-dom"; 

const App = () => {
  return (    
    <div className="app-container">
      <div className='header-container'>
        <Header/> {/*trong Header có các Route gồm các path, mỗi lần chọn cái path nào thì element tương ứng sẽ hiển thị trong Outlet ở dưới*/}
      </div>
      <div className='main-container'>
        <div className='sidenav-container'>
        </div>
        <div className='app-content'>
          <Outlet/> {/*Outlet này để xác định vùng gọi riêng tức là vùng hiển thị của Route con bên index.js, trên phải import */}
        </div>
      </div>
    </div>
  );
}
export default App;
