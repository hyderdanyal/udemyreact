import React from "react";

const userInput = (props) =>{
return(
<div><p> Enter your input</p>
<input type='text' onChange={props.changed} value={props.name}/> 
</div>
)}
export default userInput;