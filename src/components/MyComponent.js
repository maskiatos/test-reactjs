import React from "react" //import thư viện react đã khai báo bên package.json

class MyComponent extends React.Component { //khai báo class MyComponent kế thừa Component từ thư viện React vừa import
    //JSX (JavaScript XML), chỉ riêng reactJS có cái này, là extension cho phép gõ html trực tiếp trong Reactjs
    state = {
        name: "Thinh",
        age: 29,
        address: "Ha Noi"
    }
    render(){ //JSX chỉ cho render 1 code block thôi, ví dụ ở đây nếu có 1 <div> khác song song thì báo lỗi, nested <div> thì được
        return(
            <div>my first component, {this.state.name}, {this.state.age} years old</div>    //this ở đây là MyComponent
        )
    }
}
export default MyComponent  //phải export MyComponent thì mới có thể import ở App.js