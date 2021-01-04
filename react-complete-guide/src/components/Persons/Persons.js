import React from 'react'
import Person from './Person/Person'
import { PureComponent } from 'react'
class Persons  extends PureComponent {
    // static getDerivedStateFrom(props,state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('[Perosns.js] shouldComponentUpdate');
    //     if(nextProps.persons !== this.props.persons ||
    //         nextProps.clicked !== this.props.clicked ||
    //         nextProps.changed !== this.props.changed){
    //     return true;
    //     } else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps,prevState,Snapshot){
        console.log('[Persons.js] componentDidUpdate ', Snapshot);
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentwillunmount')
    }
    render(){
    console.log('[Persons.js] is rendering')
    return (
        this.props.persons.map((person,index) => {
        return <Person click={() => this.props.clicked(index)} 
        name={person.name} age={person.age} id={person.id}
        changed={(event)=>this.props.changed(event,person.id)}/>
  })
    )}
    
}
  export default Persons;