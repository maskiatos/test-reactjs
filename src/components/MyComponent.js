//ĐÂY LÀ COMPONENT CON CỦA App.js VÀ ĐƯỢC GỌI RA BÊN ĐÓ BẰNG CÁCH EXPORT RA ĐỂ CHIA CODE RA CHO DỄ QUẢN LÝ
import React from "react" //import thư viện react đã khai báo bên package.json
import DisplayInfor from "./DisplayInfor" //import componet DisplayInfor export ra từ DisplayInfo.js
import AddUserInfor from "./AddUserInfor" //import componet UserInfor export ra từ UserInfo.js

class MyComponent extends React.Component { //khai báo class MyComponent kế thừa Component từ thư viện React vừa import
    //JSX (JavaScript XML), chỉ riêng reactJS có cái này, là extension cho phép gõ html trực tiếp trong Reactjs
    state = {
        ListUsers:[
            {id: 1, name: "Thinh", age: "29"}, //age ở đây là string thì sau khi thao tác logic phải thêm + đằng trước để chuyển về số
            {id: 2, name: "Chris", age: "35"},
            {id: 3, name: "Noname", age: "16"},
        ]
    }
    handleAddNewUser = ((a) => {
        // let NewList = this.state.ListUsers;
        // NewList.unshift(a)
        // this.setState({
        //     ListUsers : NewList
        // })
        //KHÔNG NÊN VIẾT NHƯ CÁCH TRÊN, NÊN VIẾT NHƯ SAU CHO GỌN
        this.setState({
            ListUsers : [a,...this.state.ListUsers] //thêm a vào đầu mảng
            // ListUsers : [...this.state.ListUsers,a] //thêm a vào cuối mảng
        })
        console.log(a)
    })
    render(){ //component bắt buộc ít nhất phải có render()
        //JSX chỉ cho render() return 1 ELEMENT HTML thôi, ví dụ ở đây nếu return thêm 1 <div> nữa thì báo lỗi, nested <div> thì được
        return(     
        //nên viết theo cách button Click me ở dưới để không phải đổi handleClick(event) thành arrowfunction để chạy cái this.state.name
            <div>
                <AddUserInfor addNewUser={this.handleAddNewUser}/> {/*truyền handleAddNewUser không được có (), có () là gọi hàm*/}
                {/*gọi UserInfor import từ bên UserInfo.js, website vẫn chạy bình thường như khi viết hết code trong đấy ở file này*/}
                <br/><br/>
                <DisplayInfor list={this.state.ListUsers}/> {/*truyền từ file cha này vào file con DisplayInfo.js, bên con .props để gọi*/}
                {/*nên truyền trong {} vì có thể truyền true, false, ... luôn, không có {} true false nó không hiểu*/}
            </div>    
        )
    }
}
export default MyComponent  //phải export MyComponent thì mới có thể import ở App.js