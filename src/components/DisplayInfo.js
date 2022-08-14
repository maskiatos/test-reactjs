
import React from "react"

class DisplayInfor extends React.Component{
    
    render(){
        //destructuring để tối ưu code
        const {list} = this.props;  //list là biến được truyền từ bên thằng cha MyComponent.js
        return(
            <div> 
                {list.map((x) => {      {/*map() tương tự foreach để lặp từng phần tử trong array*/}
                    return(
                        <div key={x.id}> {/*key UNIQUE để đánh dấu các thẻ html với nhau, tránh khi muốn thay đổi lại thao tác nhầm cái*/}
                            My name is {x.name}, {x.age} years old <hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default DisplayInfor