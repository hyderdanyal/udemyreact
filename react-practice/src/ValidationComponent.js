import React from "react"

const ValidationComponent = props =>{
    
        let validationMessage="Text too short"
        if(props.length>5){
        validationMessage= "Text long enough"
        }
        return(
            <div>
               {validationMessage}
            </div>
        )    
    }

export default ValidationComponent;