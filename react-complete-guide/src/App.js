import React, { Component } from 'react';
import './App.css';
// import Radium,{StyleRoot} from "radium";
// import styled from "styled-components";
import Person from './Person/Person';

// const StyledButton = styled.button`
//       background-color:${props => props.colorchange? 'red' : 'green'};
//       color:white;
//       font:inherit;
//       border: 1px solid blue;
//       padding: 8px;
//       cursor:pointer;
//       &:hover{
//          background-color:${props => props.colorchange? 'salmon' : 'lightgreen'};
//          color:black;
//        }
//     `;

class App extends Component {
  state = {
    persons: [
      {id:1, name:'cash', age:28},
      {id:2, name:"Manuel", age:20}
    ]
  }
    

  
  switchNameHandler = (newName) =>{
    // Don't do this: this.state.persons[0].name = 'cheque';
    this.setState({persons: [ {id:1, name:newName, age:28}]});
  }
  
  changeNameHandler = (event,id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id ===id;
    });
    const person = {...this.state.persons[personIndex]};
    // another method const person = Object.assign({},this.state.persons[personIndex])
    person.name=event.target.value

    const persons = [...this.state.persons];
    persons[personIndex]=person;
    this.setState({persons:persons})

    // this.setState({
    //   persons: [
    //     {name:'cash', age:28},
    //     {name: event.target.value, age:20}
    //   ],
    //   showPersons:false

    // })
  }

  togglePersonsHandler= () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonsHandler=(personIndex) =>{
    const persons = this.state.persons;
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  render() {
    // const style = {
    //   backgroundColor:"green",
    //   color:"white",
    //   font:'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor:'pointer',
    //   // ':hover':{
    //   //   backgroundColor:"lightgreen",
    //   //   color:"black"
    //   // }
    // };

    let persons=null;
    
    if(this.state.showPersons) {
      persons= (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person click={() => this.deletePersonsHandler(index)} 
            name={person.name} age={person.age} id={person.id}
            changed={(event)=>this.changeNameHandler(event,person.id)}/>
          })
          }
        </div>
      )
      // style.backgroundColor="red"
      // style[':hover']={
      //   backgroundColor:'salmon',
      //   color:'black'
      // }
      // console.log("pid",person.id)
    }

    // if(this.state.showPersons){
    //   persons=(
    //   <div> 
    //   <Person name="cash" age="29">Namaste London</Person> 
    //   <Person click={this.switchNameHandler.bind(this,"Taxi")}
    //   name={this.state.persons[0].name} age={this.state.persons[0].age}>Naacho</Person> 
    //    <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
    //    changed={this.changeNameHandler}></Person>
    //     </div>
    //   ); 
    // }
    let classes = [];
    if(this.state.persons.length >= 1){
      classes.push("red")
    }
    if(this.state.persons.length === 1){
      classes.push("bold")
    }
    return (
      // <StyleRoot>
      <div className="App">
        <h1>HIIIIII </h1>
        <p className={classes.join(" ")}>Hope this works</p>
        {/* <button style={style}
        // onClick={this.switchNameHandler.bind(this,"Maxi")}
        onClick={this.togglePersonsHandler}> Toggle Person Div </button> */}
        {/* <StyledButton colorchange={this.state.showPersons} onClick={this.togglePersonsHandler}> Toggle Person Div </StyledButton> */}
        
        {/* { this.state.showPersons? */}
          {/* // <div> */}
        {/* <Person name="cash" age="29">Namaste London</Person> */}
        {/* <Person click={this.switchNameHandler.bind(this,"Taxi")}  */}
        {/* // name={this.state.persons[0].name} age={this.state.persons[0].age}>Naacho</Person> */}
        {/* <Person name={this.state.persons[1].name} age={this.state.persons[1].age} */}
        {/* // changed={this.changeNameHandler}></Person> */}
        {/* </div>:null */}
        {/* // } */}
        {persons}
      </div>
      // </StyleRoot>
    );
  }
}

export default App;
// export default Radium(App);

// const app = props => {

//     const [personsState,setpersonsState] = useState({
//           persons: [
//             {name:'cash', age:28}
//           ]
//         });

//         const switchNameHandler = () =>{
//               // Don't do this: this.state.persons[0].name = 'cheque';
//               setpersonsState({persons: [ {name:'cheque', age:28}]});
//             }

//     return (
//       <div className="App">
//         <h1>HIIIIII </h1>
//         <button onClick={switchNameHandler}> Switch Name </button>
//         {/* <Person name="cash" age="29">Namaste London</Person> */}
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>Naacho</Person>
//       </div>
//     );
//   }


// export default app;
