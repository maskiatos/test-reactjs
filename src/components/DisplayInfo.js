
import React from "react"

class DisplayInfor extends React.Component{
    
    render(){
        //destructuring để tối ưu code
        const {name, age} = this.props;
        return(
            <div>
                My name is {name}, {age} years old <br/>
                {this.props.arr}
            </div>
        )
    }
}
export default DisplayInfor