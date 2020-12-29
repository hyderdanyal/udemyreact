import React from React
import ReactDom from ReactDom


function Person(props) {
    return(
    //     <div className="person">
    //         <h1>Max</h1>
    //         <p>Your Age: 28</p>
    //     </div>
    <div className="person">
            <h1>{props.name}</h1>
            <p>Your Age: {props.age}</p>
        </div>
    );
    

}

// ReactDom.render(<Person name="Max" age="28" />,
//     document.querySelector('#p1'));


// ReactDom.render(<Person name="Manu" age="29" />,
//     document.querySelector('#p2'));

// Using single render
var app= (
<div>
<Person name="Max" age="28" />
<Person name="Manu" age="29" />
</div>
);

ReactDom.render(app,document.querySelector('#app'))