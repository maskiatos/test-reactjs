//ĐÂY LÀ COMPONENT CON CỦA App.js VÀ ĐƯỢC GỌI RA BÊN ĐÓ BẰNG CÁCH EXPORT RA ĐỂ CHIA CODE RA CHO DỄ QUẢN LÝ
import React from "react" //import thư viện react đã khai báo bên package.json
import DisplayInfor from "./DisplayInfo" //import componet DisplayInfor export ra từ DisplayInfo.js
import UserInfor from "./UserInfo" //import componet UserInfor export ra từ UserInfo.js

class MyComponent extends React.Component { //khai báo class MyComponent kế thừa Component từ thư viện React vừa import
    //JSX (JavaScript XML), chỉ riêng reactJS có cái này, là extension cho phép gõ html trực tiếp trong Reactjs
    
    render(){ //component bắt buộc ít nhất phải có render()
        //JSX chỉ cho render() return 1 code block thôi, ví dụ ở đây nếu return thêm 1 <div> nữa thì báo lỗi, nested <div> thì được
        const arr = [1,2,"abc","def"]
        return(     
        //nên viết theo cách button Click me ở dưới để không phải đổi handleClick(event) thành arrowfunction để chạy cái this.state.name
            <div>
                <UserInfor/>    
                {/*gọi UserInfor import từ bên UserInfo.js, website vẫn chạy bình thường như khi viết hết code trong đấy ở file này*/}
                <br/><br/>
                <DisplayInfor name={"Thinh"} age={"29"}/> {/*truyền name và age từ file cha MyComponent.js vào file con DisplayInfo.js*/}
                <hr/>   {/*nên truyền trong {} vì có thể truyền true, false, ... luôn, không có {} true false nó không hiểu*/}
                <DisplayInfor arr={arr}/> {/*có thể truyền nhiều tham số vào cùng 1 component, bên con sẽ .props để nhận*/}
            </div>    
        )
    }
}
export default MyComponent  //phải export MyComponent thì mới có thể import ở App.js