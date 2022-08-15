//ĐÂY LÀ COMPONENT CON CỦA MyComponent.js VÀ ĐƯỢC GỌI RA BÊN ĐÓ BẰNG CÁCH EXPORT RA ĐỂ CHIA CODE RA XỬ LÝ form
import React from "react"

class AddUserInfor extends React.Component{
    state = {   
        name: "",
        age: "",
        address: "Ha Noi"
    }
    handleClick(a){ //dưới là onClick={(x) => {this.handleClick(x)}} thì nó mới hiểu cái this là gì và chạy, không là báo lỗi 
        this.setState({     //setState() là hàm đặt lại thuộc tính, truyền vào OBJECT rồi chỉnh, hạn chế dùng ngoài function (NÊN VIẾT NTN)
            name: "Chris",
            age: Math.floor((Math.random()*100)+1)
        })  //RIÊNG class component CÓ CHỨC NĂNG MERGE STATE (GỘP CÁC STATE KHI CÓ NHIỀU STATE), function component KHÔNG CÓ
        //setState() Ở TRÊN CŨNG TƯƠNG TỰ this.state.age=a.target.value NHƯNG KHÔNG NÊN DÙNG CÁI NÀY VÌ DỄ SINH RA BUG
        console.log("My name is ",this.state.name)  //this ở đây là MyComponent 
    }
    handleClick1 = (event) =>{ /*nếu dưới chỉ gọi onClick={this.handleClick1} thì ở đây phải viết kiểu arrow function như này 
    thì nó mới hiểu cái this ở đây, không sẽ báo lỗi*/
        console.log("My name is ",this.state.name)  
    }
    handleOnMouseOver(x){   //x ở đây cũng giống event ở trên, là biến chứa OBJECT element html gọi nó gồm các props, ở đây là <button>
        console.log(x.pageX)    //lấy ra hoành độ điểm hover vào
    }
    handleOnChangeName(event){
        this.setState({
            name: event.target.value, //event là biến chứa hành động của người dùng, nó là 1 object có target là <input> gọi nó
        })
    }
    handleOnChangeAge(event){
        this.setState({
            age: event.target.value, //event là biến chứa hành động của người dùng, nó là 1 object có target là <input> gọi nó
        })
    }
    handleSubmit(event){
        event.preventDefault()  //ngăn chặn hiệu ứng mặc định, SUBMIT thì nó sẽ mặc định sau khi bấm sẽ reload lại, giờ thì không
        this.props.addNewUser({ //gọi hàm props truyền từ cha sang và truyền value của name và age từ form ngược sang cha để chạy
            id: Math.floor((Math.random()*100)+1) + "random", //thêm random để nhỡ nó ra số trùng id đã có sẵn thì cũng không sao
            name: this.state.name, //value từ <input>
            age: this.state.age, //value từ <input>
        })
    }
    render(){
        return(
            <div>
                my first component, {this.state.name}, {this.state.age} years old 
                <button onClick={(x) => this.handleClick(x)}>Click me (Arrow func)</button>   {/*nên dùng, trên chỉ cần handleClick(a){}*/}
                <button onClick={this.handleClick1}>Click me (normal)</button>
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>

                <form onSubmit={(x) => this.handleSubmit(x)}>
                    <label>Name</label>
                    <input type="text" onChange={(x) => this.handleOnChangeName(x)} value={this.state.name}/> 
                        {/*nên để Reactjs quản lý, VALUE như này mới chạy, nếu gán thì sẽ không chạy đúng ý được và hiệu năng kém hơn*/}
                    <label>Age</label>
                    <input type="text" onChange={(x) => this.handleOnChangeAge(x)} value={this.state.age}/> 
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default AddUserInfor