import React from 'react';
// const WithClass = props => (
const withClass = (WrappedComponent, className) => {
    return props => (
    // <div className={props.classes}>
    <div className={className}>
        <WrappedComponent {...props}/>
        {/* {props.children} */}
    </div>
);
    };
export default withClass;