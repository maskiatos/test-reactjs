//ĐÂY LÀ COMPONENT CON CỦA App.js VÀ ĐƯỢC GỌI RA BÊN ĐÓ BẰNG CÁCH EXPORT RA ĐỂ CHIA CODE RA CHO DỄ QUẢN LÝ
import React, { useState } from "react" 
//import useState, useEffect, ... để sử dụng cái built-in useState(), useEffect(),... ở function component
import DisplayInfor from "./DisplayInfor" //import componet DisplayInfor export ra từ DisplayInfo.js
import AddUserInfor from "./AddUserInfor" //import componet UserInfor export ra từ UserInfo.js

// CÁCH 1: class component (CHỈ class component MỚI CÓ this, function component KHÔNG CÓ), DÙNG KHI stateful (KHI CÓ KHAI BÁO state)
// class MyComponent extends React.Component { //khai báo class MyComponent kế thừa Component từ thư viện React vừa import
//     //JSX (JavaScript XML), chỉ riêng reactJS có cái này, là extension cho phép gõ html trực tiếp trong Reactjs
//     //CHỈ KHI DÙNG class component MỚI CÓ this, function component KHÔNG CÓ this
//     state = {
//         ListUsers:[
//             {id: 1, name: "Thinh", age: "29"}, //age ở đây là string thì sau khi thao tác logic phải thêm + đằng trước để chuyển về số
//             {id: 2, name: "Chris", age: "35"},
//             {id: 3, name: "Noname", age: "16"},
//         ]
//     }
//     handleAddNewUser = ((a) => {
//         // let NewList = this.state.ListUsers;
//         // NewList.unshift(a)
//         // this.setState({
//         //     ListUsers : NewList
//         // })
//         //KHÔNG NÊN VIẾT NHƯ CÁCH TRÊN, NÊN VIẾT NHƯ SAU CHO GỌN
//         this.setState({
//             ListUsers : [a,...this.state.ListUsers] //thêm a vào đầu mảng
//             // ListUsers : [...this.state.ListUsers,a] //thêm a vào cuối mảng
//         })
//         console.log(a)
//     })
//     handleDeleteUser = (a) => {
//         let ListUsersClone = this.state.ListUsers
//         ListUsersClone = ListUsersClone.filter(b => b.id !== a) //filter ListUserClone chỉ còn cái có id khác cái input truyền vào
//         this.setState({
//             ListUsers: ListUsersClone
//         })
//     }
//     render(){ //class component bắt buộc ít nhất phải có render(), code trong return() gọi là TEMPLATE, component = template + logic
//         //JSX chỉ cho render() return 1 ELEMENT HTML thôi, ví dụ ở đây nếu return thêm 1 <div> nữa thì báo lỗi, nested <div> thì được
//         return(     
//         //nên viết theo cách button Click me ở dưới để không phải đổi handleClick(event) thành arrowfunction để chạy cái this.state.name
//             <> {/*FRAGMENT, để có thể return nhiều hơn 1 ELEMENT HTML mà không cần render thêm 1 element <div> tổng nữa*/}
//                 <div className="a">
//                     <AddUserInfor addNewUser={this.handleAddNewUser}/> {/*gọi UserInfor import từ bên UserInfo.js*/}
//                     {/*truyền handleAddNewUser không được có (), có () là gọi hàm*/}
//                     <br/><br/>
//                 </div>
//                 <div className="b">
//                     <DisplayInfor list={this.state.ListUsers} deleteUser={this.handleDeleteUser}/> 
//                     {/*truyền từ file cha này vào file con, bên con .props để gọi*/}
//                     {/*nên truyền trong {} vì có thể truyền true, false, ... luôn, không có {} true false nó không hiểu*/}
//                 </div>
//             </>    
//         )
//     }
// }
/************************************************************************************************************************************* */
//CÁCH 2: function component (KHÔNG CÓ this), DÙNG KHI stateless (KHI KHÔNG CẦN KHAI BÁO state)
const MyComponent = (props) => { //function component KHÔNG CÓ render(), truyền props (built-in, phải y hệt) là nó hiểu là props bên cha
    const [ListUsers, setListUsers] = useState( //tương đương state ở class component trên, khai báo giá trị cho ListUsers:
        [
            {id: 1, name: "Thinh", age: "29"}, //age ở đây là string thì sau khi thao tác logic phải thêm + đằng trước để chuyển về số
            {id: 2, name: "Chris", age: "35"},
            {id: 3, name: "Noname", age: "16"},
        ]
    )
    const handleAddNewUser = ((a) => { //bỏ hết this với state
        setListUsers([a,...ListUsers]) //thêm a vào đầu mảng, tương đương dùng setState() bên class component
        // setListUsers([...ListUsers,a]) //thêm a vào cuối mảng
        console.log(a)
    })
    const handleDeleteUser = (a) => { //bỏ hết this với state
        let ListUsersClone = ListUsers
        ListUsersClone = ListUsersClone.filter(b => b.id !== a) //filter ListUserClone chỉ còn cái có id khác cái input truyền vào
        setListUsers(ListUsersClone) //khi dùng class component thì nó tương đương việc dùng setState() bên trên
    }
    return(
        <> {/*FRAGMENT, để có thể return nhiều hơn 1 ELEMENT HTML mà không cần render thêm 1 element <div> tổng nữa*/}
            <div className="a">
                <AddUserInfor addNewUser={handleAddNewUser}/> {/*gọi UserInfor import từ bên UserInfo.js*/}
                {/*truyền handleAddNewUser không được có (), có () là gọi hàm*/}
                <br/><br/>
            </div>
            <div className="b">
                <DisplayInfor list={ListUsers} deleteUser={handleDeleteUser}/> 
                {/*truyền từ file cha này vào file con, bên con .props để gọi với class component, function component thì không cần*/}
                {/*nên truyền trong {} vì có thể truyền true, false, ... luôn, không có {} true false nó không hiểu*/}
            </div>
        </>
    )
}
export default MyComponent  //phải export MyComponent thì mới có thể import ở App.js