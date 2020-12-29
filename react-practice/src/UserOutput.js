import React, { Component } from 'react'
import "./User.css"

class userOutput extends Component{
    render(){
        return(
            <div className="Output">
                
                <p>Chhamak {this.props.username}</p>
                <p>Chhalo</p>
            </div>
        )
    }
}
export default userOutput;