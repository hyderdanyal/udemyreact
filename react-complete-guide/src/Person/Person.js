import React from 'react';
import styled from "styled-components"
// import Radium from "radium";
// import "./Person.css"

const StyledDiv = styled.div`
width: 60%;
margin: 60px;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;

@media (min-width:500px):{
         width:450px
`

// function person(){}
// var person= function(){}

const person = (props) => {
    // const style= {
    //     '@media (min-width:500px)':{
    //         width:'450px'
    //     }
    // }
    return (
        // <div className="Person" style={style}>
        // <div className="Person">
        <StyledDiv>
    <p onClick={props.click}> I'm {props.name} {Math.random()*3} {props.children } {props.age} !</p>
    <input type="text" onChange={props.changed} value={props.name}/>
    </StyledDiv>
    )};

export default person;
// export default Radium(person);