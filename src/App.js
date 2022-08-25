//bên git branch dev thì không có router với bootstrap thì nó phải import nhiều, bên này chỉ cần import App.scss
//cài router, boostrap, react bootstrap bằng lệnh npm install --save-exact react-router-dom@6.3.0 bootstrap@5.2.0 react-bootstrap@2.4.0
import './App.scss'; //không nên dùng css, nên dùng sass cài đặt bằng lệnh npm install --save-exact sass@1.53.0, sass có đuôi .scss
import Header from './components/Header/Header';

const App = () => {
  return (    
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
