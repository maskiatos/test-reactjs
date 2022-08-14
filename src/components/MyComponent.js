//ĐÂY LÀ COMPONENT CON CỦA App.js VÀ ĐƯỢC GỌI RA BÊN ĐÓ BẰNG CÁCH EXPORT RA ĐỂ CHIA CODE RA CHO DỄ QUẢN LÝ
import React from "react" //import thư viện react đã khai báo bên package.json
import DisplayInfor from "./DisplayInfo" //import componet DisplayInfor export ra từ DisplayInfo.js
import UserInfor from "./UserInfo" //import componet UserInfor export ra từ UserInfo.js

class MyComponent extends React.Component { //khai báo class MyComponent kế thừa Component từ thư viện React vừa import
    //JSX (JavaScript XML), chỉ riêng reactJS có cái này, là extension cho phép gõ html trực tiếp trong Reactjs
    state = {
        ListUsers:[
            {id: 1, name: "Thinh", age: 29},
            {id: 2, name: "Chris", age: 35},
            {id: 3, name: "Noname", age: 999},
        ]
    }

    render(){ //component bắt buộc ít nhất phải có render()
        //JSX chỉ cho render() return 1 code block thôi, ví dụ ở đây nếu return thêm 1 <div> nữa thì báo lỗi, nested <div> thì được
        return(     
        //nên viết theo cách button Click me ở dưới để không phải đổi handleClick(event) thành arrowfunction để chạy cái this.state.name
            <div>
                <UserInfor/>    
                {/*gọi UserInfor import từ bên UserInfo.js, website vẫn chạy bình thường như khi viết hết code trong đấy ở file này*/}
                <br/><br/>
                <DisplayInfor list={this.state.ListUsers}/> {/*truyền từ file cha này vào file con DisplayInfo.js, bên con .props để gọi*/}
                {/*nên truyền trong {} vì có thể truyền true, false, ... luôn, không có {} true false nó không hiểu*/}
            </div>    
        )
    }
}
export default MyComponent  //phải export MyComponent thì mới có thể import ở App.js