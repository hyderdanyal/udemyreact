import React,{Component} from 'react';
// import styled from "styled-components"
import classes from '../Person/Person.module.css'
import Aux from "../../../HigherOrderComponents/Auxillary"
import PropTypes from 'prop-types';
import WithClass from "../../../HigherOrderComponents/WithClass"
// import Radium from "radium";
// import "./Person.css"

// const StyledDiv = styled.div`
// width: 60%;
// margin: 60px;
// border: 1px solid #eee;
// box-shadow: 0 2px 3px #ccc;
// padding: 16px;
// text-align: center;

// @media (min-width:500px):{
//          width:450px
//         }
// `

// function person(){}
// var person= function(){}

class Person extends Component {
    render(){
    // const style= {
    //     '@media (min-width:500px)':{
    //         width:'450px'
    //     }
    // }
    const rnd= Math.random()
    // if(rnd>0.7){
    //     throw new Error('Something went wrong');
    // }
    console.log('[person.js] is rendering');
    return (
        // <div className="Person" style={style}>
        // <div className="Person">
        // <StyledDiv>
        <Aux>
    <p onClick={this.props.click}> I'm {this.props.name} {rnd*3} {this.props.children } {this.props.age} !</p>
    <input type= "text"
      onChange = {this.props.changed }
      value={ this.props.name } />
    {/* </StyledDiv> */}
        </Aux>
    );
}
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}
export default WithClass(Person, classes.Person);
//  export default Radium(person);