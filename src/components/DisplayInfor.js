
import React from "react"
import "./DisplayInfor.scss" 
//import file này ở đây là để áp dụng riêng các code bên trong cho file này thôi, không phải khai báo thừa css global bên App.css như cũ 
import logoImage from "../logo.svg"

class DisplayInfor extends React.Component{
    state={
        showList: true
    }
    handleShowHide(a){
        this.setState({
            showList : !this.state.showList // ! để biểu thị giá trị ngược lại, đang true thành false, đang false thành true
        })
    }
    render(){
        //destructuring để tối ưu code
        const {list} = this.props;  //list là biến được truyền từ bên thằng cha MyComponent.js
        return(
            <div className="DisplayInforContainer"> {/*nên đặt class cho thẻ html ở return để khai báo css dùng riêng cho nó ở .scss*/}
                <img src={logoImage}/> {/*logoImage là link đến ảnh được import ở trên, có thể là link đến file local hoặc link trên mạng */}
                <div>
                    <h3 onClick={(x) => this.handleShowHide(x)}>
                        {this.state.showList === true ? "Hide all" : "Show all"}
                    </h3>
                </div>
                {this.state.showList && //<div> true rồi VÀ nếu this.state.showList là true nữa thì mới hiện ra, false thì không hiện
                    <div>
                        {list.map((x) => {      {/*map() tương tự foreach để lặp từng phần tử trong array*/}
                            //CÁCH NÊN DÙNG KHI MUỐN GÁN className THEO ĐIỀU KIỆN
                            return( //dấu + ở trước là cách chuyển string về number nhanh trong javascript
                                <div key={x.id} className={+x.age<18 ? "under18" : "above18"}> {/*JSX cho phép dùng script trong html*/}
                                {/*key UNIQUE để đánh dấu các thẻ html với nhau, tránh thao tác nhầm cái khi muốn sửa cái nào đó*/}
                                    My name is {x.name}, {x.age} years old <hr/>
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
}
export default DisplayInfor