//ĐÂY LÀ COMPONENT CON CỦA MyComponent.js VÀ ĐƯỢC GỌI RA BÊN ĐÓ BẰNG CÁCH EXPORT RA ĐỂ CHIA CODE RA CHO DỄ QUẢN LÝ
import React, { useState, useEffect } from "react" 
//import useState, useEffect, ... để sử dụng cái built-in useState(), useEffect(),... ở function component
import "./DisplayInfor.scss" 
//import file này ở đây là để áp dụng riêng các code bên trong cho file này thôi, không phải khai báo thừa css global bên App.css như cũ 
import logoImage from "../logo.svg"

//CÁCH 1: class component (CHỈ class component MỚI CÓ this, function component KHÔNG CÓ), DÙNG KHI stateful (KHI CÓ KHAI BÁO state)
// class DisplayInfor extends React.Component{
//     constructor(props){ //viết đầy đủ khi không có Babel Compiler
//         super(props) //super(props) là để thằng con nhận được props từ cha truyền xuống
//         console.log("constructor chay dau tien")
//         this.state={
//             showList: true
//         }
//     } //do có Babel Compiler nên ở đây đều viết gọn như dưới đây, không có thì phải viết đủ ra như ở trên, ở đây viết đủ làm ví dụ
//     // state={
//     //     showList: true
//     // }
//     handleShowHide(a){
//         this.setState({
//             showList : !this.state.showList // ! để biểu thị giá trị ngược lại, đang true thành false, đang false thành true
//         })
//     }
//     componentDidMount(){ //built-in function, không cần gọi ra cũng tự chạy, chạy cuối sau constructor và render vì nó để gọi API
//         console.log("componentDidMount chay cuoi cung")
//         setTimeout(() => { //gọi API setTimeout
//             document.title = "TEST"
//         }, 2000);
//     } //componentDidMount() CHỈ CÓ TRONG class component, GIỐNG NHƯ componentDidUpdate() Ở DƯỚI
//     componentDidUpdate(prevProps, prevState, snapshot){ //chỉ chạy khi thay đổi props, setState() hoặc forUpdate()
//         console.log("componentDidUpdate", this.props, prevProps) //this.props là props hiện tại sau thay đổi, prevProps là trước thay đổi   
//         this.props.list.length == 1? alert("Ban la nguoi cuoi cung") : null //xóa đến khi chỉ còn 1 người thì hiện thông báo
//     } //DÙNG ĐỂ SET ĐIỀU KIỆN LOGIC CHO 1 CÁI SỰ KIỆN SẼ DIỄN RA TẠI THỜI ĐIỂM NHẤT ĐỊNH, CHỈ CÓ TRONG class component
//     render(){
//         console.log("render chay thu hai")
//         //destructuring để tối ưu code
//         const {list} = this.props;  //list là truyền từ bên thằng cha MyComponent.js, dưới không phải this.props.list mà list là được
//         return(
//             <div className="DisplayInforContainer"> {/*nên đặt class cho thẻ html ở return để khai báo css dùng riêng cho nó ở .scss*/}
//                 <img src={logoImage}/> {/*logoImage là link đến ảnh được import ở trên, có thể là link đến file local hoặc link trên mạng */}
//                 <div>
//                     <h3 onClick={(a) => this.handleShowHide(a)}>
//                         {this.state.showList === true ? "Hide all" : "Show all"}
//                     </h3>
//                 </div>
//                 {this.state.showList && //<div> true rồi VÀ nếu this.state.showList là true nữa thì mới hiện ra, false thì không hiện
//                     <div>
//                         {list.map((x) => {      {/*map() tương tự foreach để lặp từng phần tử trong array*/}
//                             //CÁCH NÊN DÙNG KHI MUỐN GÁN className THEO ĐIỀU KIỆN
//                             return( //dấu + ở trước là cách chuyển string về number nhanh trong javascript
//                                 <div key={x.id} className={+x.age<18 ? "under18" : "above18"}> {/*JSX cho phép dùng script trong html*/}
//                                 {/*key UNIQUE để đánh dấu các thẻ html với nhau, tránh thao tác nhầm cái khi muốn sửa cái nào đó*/}
//                                     My name is {x.name}, {x.age} years old <hr/>
//                                     <button onClick={() => this.props.deleteUser(x.id)}>Delete this</button>
//                                 </div>
//                             )
//                             //CÁCH CŨ KHÔNG NÊN DÙNG KHI MUỐN GÁN className THEO ĐIỀU KIỆN (DÀI DÒNG, KHÔNG NÊN)
//                             // if(+x.age<18){ //dấu + ở trước là cách chuyển string về number nhanh trong javascript
//                             //     return(
//                             //         <div key={x.id} className="under18"> 
//                             //             My name is {x.name}, {x.age} years old <hr/>
//                             //         </div>
//                             //     )
//                             // }else{
//                             //     return(
//                             //         <div key={x.id} className="above18"> 
//                             //             My name is {x.name}, {x.age} years old <hr/>
//                             //         </div>
//                             //     )
//                             // }
//                         })}
//                     </div>
//                 }
//             </div>
//         )
//     }
// }
/************************************************************************************************************************************* */
//CÁCH 2: function component (KHÔNG CÓ this), DÙNG KHI stateless (KHI KHÔNG CẦN KHAI BÁO state)
const DisplayInfor = (props) => { //function component KHÔNG CÓ render(), truyền props (built-in, phải y hệt) là nó hiểu là props bên cha
    const {list} = props;  //list là truyền từ bên thằng cha MyComponent.js
    //function component LÀ stateless (KHÔNG CÓ setState()) NÊN PHẢI SỬ DỤNG BUILT-IN HOOK tên là useState() ĐỂ CẬP NHẬT GIÁ TRỊ state
    const [showList, setShowHide] = useState(true) //useState() tạo giá trị true cho showList và giá trị cập nhật setShowHide của nó
    //dùng const ở đây để kiểm soát sự thay đổi của showList, chỉ có thể thông qua useState() cập nhật setShowHide, không cho thay đổi tay
    //code useState() trên tương đương state ở class component trên, chỉ không có setShowHide do class component có setState() rồi
    const handleShowHide = () => { //bỏ hết this với state
        setShowHide(!showList) //giá trị setShowHide luôn luôn là giá trị ngược lại của showList
    }
    //useEffect() CHỈ CÓ Ở function component, TƯƠNG ĐƯƠNG CẢ componentDidMount() VÀ componentDidUpdate() BÊN class component
    useEffect(() => { //giống 2 cái kia bên class component, constructor chạy đầu tiên rồi đến render() cuối cùng là useEffect()
        console.log("useEffect() này chỉ chạy 1 lần sau lần render() ngay trước nó")
    },[]) //[] không có gì bên trong nghĩa là nó không theo dõi sự thay đổi của cái gì, nên sẽ chỉ chạy đúng 1 lần
    useEffect(() => {
        if(list.length == 0){
            alert("You have deleted all the user list!")
        }
    },[list]) //[list] nghĩa là nó sẽ theo dõi sự thay đổi của list, bất kì lúc nào thỏa mãn sẽ chạy không giới hạn số lần
    return(
        <div className="DisplayInforContainer"> {/*nên đặt class cho thẻ html ở return để khai báo css dùng riêng cho nó ở .scss*/}
            <img src={logoImage}/> {/*logoImage là link đến ảnh được import ở trên, có thể là link đến file local hoặc link trên mạng */}
            <div>
                <p onClick={() => handleShowHide()}>{showList === true? "Hide all" : "Show all"}</p>
            </div>
            {showList && //<div> true rồi nếu showList true nữa thì nó hiện ra vì tổng thể kết quả là true, false thì không hiện
                <div>
                    {list.map((x) => {      {/*map() tương tự foreach để lặp từng phần tử trong array*/}
                        //CÁCH NÊN DÙNG KHI MUỐN GÁN className THEO ĐIỀU KIỆN
                        return( //dấu + ở trước là cách chuyển string về number nhanh trong javascript
                            <div key={x.id} className={+x.age<18 ? "under18" : "above18"}> {/*JSX cho phép dùng script trong html*/}
                            {/*key UNIQUE để đánh dấu các thẻ html với nhau, tránh thao tác nhầm cái khi muốn sửa cái nào đó*/}
                                My name is {x.name}, {x.age} years old <hr/>
                                <button onClick={() => props.deleteUser(x.id)}>Delete this</button>
                            </div>
                        )
                        //CÁCH CŨ KHÔNG NÊN DÙNG KHI MUỐN GÁN className THEO ĐIỀU KIỆN (DÀI DÒNG, KHÔNG NÊN)
                        // if(+x.age<18){ //dấu + ở trước là cách chuyển string về number nhanh trong javascript
                        //     return(
                        //         <div key={x.id} className="under18"> 
                        //             My name is {x.name}, {x.age} years old <hr/>
                        //         </div>
                        //     )
                        // }else{
                        //     return(
                        //         <div key={x.id} className="above18"> 
                        //             My name is {x.name}, {x.age} years old <hr/>
                        //         </div>
                        //     )
                        // }
                    })}
                </div>
            }
        </div>
    )
}
export default DisplayInfor