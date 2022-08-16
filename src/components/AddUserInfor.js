//ĐÂY LÀ COMPONENT CON CỦA MyComponent.js VÀ ĐƯỢC GỌI RA BÊN ĐÓ BẰNG CÁCH EXPORT RA ĐỂ CHIA CODE RA XỬ LÝ form
import React, { useState } from "react"

// CÁCH 1: class component (CHỈ class component MỚI CÓ this, function component KHÔNG CÓ), DÙNG KHI stateful (KHI CÓ KHAI BÁO state)
// class AddUserInfor extends React.Component{
//     //CHỈ KHI DÙNG class component MỚI CÓ this, function component KHÔNG CÓ this
//     state = {   
//         name: "",
//         age: "",
//         address: "Ha Noi"
//     }
//     handleClick(a){ //dưới là onClick={(x) => {this.handleClick(x)}} thì nó mới hiểu cái this là gì và chạy, không là báo lỗi 
//         this.setState({     //setState() là hàm đặt lại thuộc tính, truyền vào OBJECT rồi chỉnh, hạn chế dùng ngoài function (NÊN VIẾT NTN)
//             name: "Chris",
//             age: Math.floor((Math.random()*100)+1)
//         })  //RIÊNG class component CÓ CHỨC NĂNG MERGE STATE (GỘP CÁC STATE KHI CÓ NHIỀU STATE), function component KHÔNG CÓ
//         //setState() Ở TRÊN CŨNG TƯƠNG TỰ this.state.age=a.target.value NHƯNG KHÔNG NÊN DÙNG CÁI NÀY VÌ DỄ SINH RA BUG
//         console.log("My name is ",this.state.name)  //this ở đây là MyComponent 
//     }
//     handleClick1 = (event) =>{ /*nếu dưới chỉ gọi onClick={this.handleClick1} thì ở đây phải viết kiểu arrow function như này 
//     thì nó mới hiểu cái this ở đây, không sẽ báo lỗi*/
//         console.log("My name is ",this.state.name)  
//     }
//     handleOnMouseOver(x){   //x ở đây cũng giống event ở trên, là biến chứa OBJECT element html gọi nó gồm các props, ở đây là <button>
//         console.log(x.pageX)    //lấy ra hoành độ điểm hover vào
//     }
//     handleOnChangeName(event){
//         this.setState({
//             name: event.target.value, //event là biến chứa hành động của người dùng, nó là 1 object có target là <input> gọi nó
//         })
//     }
//     handleOnChangeAge(event){
//         this.setState({
//             age: event.target.value, //event là biến chứa hành động của người dùng, nó là 1 object có target là <input> gọi nó
//         })
//     }
//     handleSubmit(event){
//         event.preventDefault()  //ngăn chặn hiệu ứng mặc định, SUBMIT thì nó sẽ mặc định sau khi bấm sẽ reload lại, giờ thì không
//         this.props.addNewUser({ //gọi hàm props truyền từ cha sang và truyền value của name và age từ form ngược sang cha để chạy
//             id: Math.floor((Math.random()*100)+1) + "random", //thêm random để nhỡ nó ra số trùng id đã có sẵn thì cũng không sao
//             name: this.state.name, //value từ <input>
//             age: this.state.age, //value từ <input>
//         })
//     }
//     render(){
//         return(
//             <> {/*FRAGMENT, để có thể return nhiều hơn 1 ELEMENT HTML mà không cần render thêm 1 element <div> tổng nữa*/}
//                 my first component, {this.state.name}, {this.state.age} years old <br/>
//                 <button onClick={(x) => this.handleClick(x)}>Click me (Arrow func)</button>   {/*nên dùng, trên chỉ cần handleClick(a){}*/}
//                 <button onClick={this.handleClick1}>Click me (normal)</button>
//                 <button onMouseOver={this.handleOnMouseOver}>Hover me</button>

//                 <form onSubmit={(x) => this.handleSubmit(x)}>
//                     <label>Name</label>
//                     <input type="text" onChange={(x) => this.handleOnChangeName(x)} value={this.state.name}/> 
//                         {/*nên để Reactjs quản lý, VALUE như này mới chạy, nếu gán thì sẽ không chạy đúng ý được và hiệu năng kém hơn*/}
//                     <label>Age</label>
//                     <input type="text" onChange={(x) => this.handleOnChangeAge(x)} value={this.state.age}/> 
//                     <button>Submit</button>
//                 </form>
//             </>
//         )
//     }
// }
/************************************************************************************************************************************* */
//CÁCH 2: function component (KHÔNG CÓ this), DÙNG KHI stateless (KHI KHÔNG CẦN KHAI BÁO state)
const AddUserInfor = (props) => { //function component KHÔNG CÓ render(), truyền props (built-in, phải y hệt) là nó hiểu là props bên cha
    //function component LÀ stateless (KHÔNG CÓ setState()) NÊN PHẢI SỬ DỤNG BUILT-IN HOOK tên là useState() ĐỂ CẬP NHẬT GIÁ TRỊ state
    const [name, setName] = useState("") //khai báo giá trị cho name là "", tương đương state ở class component trên
    const [age, setAge] = useState("") //khai báo giá trị cho age là "", tương đương state ở class component trên
    const [address, setAddress] = useState("Ha Noi") //khai báo giá trị cho address là "Ha Noi", tương đương state ở class component trên

    const handleClick = (a) => { //bỏ hết this và state đi 
        setName("Chris") //như setState() ở bên class component trên
        setAge(Math.floor((Math.random()*100)+1)) //như setState() ở bên class component trên
        console.log("My name is ",name)  
    }
    const handleClick1 = (event) =>{ //bỏ hết this và state đi
        console.log("My name is ",name)  
    }
    const handleOnMouseOver = (x) => { //x cũng như event ở trên, là biến chứa OBJECT element html gọi nó gồm các props, ở đây là <button>
        console.log(x.pageX)    //lấy ra hoành độ điểm hover vào
    }
    const handleOnChangeName = (x) => { //x là biến chứa hành động của người dùng, nó là 1 object có target là <input> gọi nó
        setName(x.target.value) //như setState() ở bên class component trên
    }
    const handleOnChangeAge = (x) => { //bỏ hết this và state đi
        setAge(x.target.value) //như setState() ở bên class component trên
    }
    const handleSubmit = (event) => { //bỏ hết this và state đi
        event.preventDefault()  //ngăn chặn hiệu ứng mặc định, SUBMIT thì nó sẽ mặc định sau khi bấm sẽ reload lại, giờ thì không
        props.addNewUser({ //gọi hàm props truyền từ cha sang và truyền value của name và age từ form ngược sang cha để chạy
            id: Math.floor((Math.random()*100)+1) + "random", //thêm random để nhỡ nó ra số trùng id đã có sẵn thì cũng không sao
            name: name, //value từ <input>
            age: age, //value từ <input>
        })
    }
    return(
        <> {/*FRAGMENT, để có thể return nhiều hơn 1 ELEMENT HTML mà không cần render thêm 1 element <div> tổng nữa*/}
            my first component, {name}, {age} years old <br/>
            <button onClick={(x) => handleClick(x)}>Click me (Arrow func)</button>   {/*nên dùng, trên chỉ cần handleClick(a){}*/}
            <button onClick={handleClick1}>Click me (normal)</button>
            <button onMouseOver={handleOnMouseOver}>Hover me</button>

            <form onSubmit={(x) => handleSubmit(x)}>
                <label>Name</label>
                <input type="text" onChange={(x) => handleOnChangeName(x)} value={name}/> 
                    {/*nên để Reactjs quản lý, VALUE như này mới chạy, nếu gán thì sẽ không chạy đúng ý được và hiệu năng kém hơn*/}
                <label>Age</label>
                <input type="text" onChange={(x) => handleOnChangeAge(x)} value={age}/> 
                <button>Submit</button>
            </form>
        </>
    )
}
export default AddUserInfor