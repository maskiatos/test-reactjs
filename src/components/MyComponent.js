import React from "react" //import thư viện react đã khai báo bên package.json

class MyComponent extends React.Component { //khai báo class MyComponent kế thừa Component từ thư viện React vừa import
    //JSX (JavaScript XML), chỉ riêng reactJS có cái này, là extension cho phép gõ html trực tiếp trong Reactjs
    state = {   
        name: "Thinh",
        age: 29,
        address: "Ha Noi"
    }
    handleClick(event){ //dưới là onClick={(x) => {this.handleClick(x)}} thì nó mới hiểu cái this là gì và chạy, không là báo lỗi 
        this.setState({     //setState() là hàm đặt lại thuộc tính, truyền vào OBJECT rồi chỉnh
            name: "Chris"
        })  //RIÊNG class component CÓ CHỨC NĂNG MERGE STATE (GỘP CÁC STATE KHI CÓ NHIỀU STATE), function component KHÔNG CÓ
        console.log("My name is ",this.state.name)  //this ở đây là MyComponent 
    }
    handleClick1 = (event) =>{ /*nếu dưới chỉ gọi onClick={this.handleClick1} thì ở đây phải viết kiểu arrow function như này 
    thì nó mới hiểu cái this ở đây, không sẽ báo lỗi*/
        console.log("My name is ",this.state.name)  
    }
    handleOnMouseOver(x){   //x ở đây cũng giống event ở trên, là biến chứa thông tin sự kiện
        console.log(x.pageX)    //lấy ra hoàng độ điểm hover vào
    }
    render(){ //JSX chỉ cho render 1 code block thôi, ví dụ ở đây nếu có 1 <div> khác song song thì báo lỗi, nested <div> thì được
        return(     
        //nên viết theo cách button Click me ở dưới để không phải đổi handleClick(event) thành arrowfunction để chạy cái this.state.name
            <div>
                my first component, {this.state.name}, {this.state.age} years old 
                <button onClick={(x) => {this.handleClick(x)}}>Click me (Arrow function)</button>   {/* nên dùng cách này */}
                <button onClick={this.handleClick1}>Click me (normal)</button>
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
            </div>    
        )
    }
}
export default MyComponent  //phải export MyComponent thì mới có thể import ở App.js