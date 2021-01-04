import React, { useEffect } from 'react';
import classes from './Cockpit.module.css'

const Cockpit = (props) => {
  useEffect(()=>{
    console.log('[Cockpit.js] useEffect')
    //Http reqqqq
    setTimeout(()=> {
      alert('Saved data to cloud');
    },1000);
      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect')
      };
  }, []);
  useEffect(()=>{
    console.log('[Cockpit.js] 2nd useEffect')
    return() =>{
      console.log('[Cockpit.js] cleanup work in 2nd useEffect')
    }
  });
    let assignedClasses = [];
    if(props.persons.length >= 1){
      assignedClasses.push("red")
    }
    if(props.persons.length === 1){
      assignedClasses.push("bold")
    }
    let btnClass='';
    if(props.showPersons){
    btnClass= classes.Red;
    }
    return(
        <div className={classes.Cockpit}>
            <h1>HIIIIII </h1>
            <p className={assignedClasses.join(" ")}>Hope this works</p>
            <button className={btnClass} 
            onClick={props.toggle}>Toggle Persons Div</button>
        
        </div>
    )
}
export default Cockpit;