// const heading = React.createElement("h1", { 
//     id:"heading"
// },"HELLO WORLD FROM REACT");





//                 FOR MANY DIVS
/*
<div>
      <div>  
              <h1></h1>
      </div>
</div>

*/


const heading = React.createElement("div",{id:"parent"}, [
 React.createElement("div",{id:"child"}, [
 React.createElement("h1",{},"I am a heading h1"),
 React.createElement("h2",{},"I am a heading h2")
 ]
 ),
 
 
 React.createElement("div",{id:"child"}, [
    React.createElement("h1",{},"I am a heading h1"),
    React.createElement("h2",{},"I am a heading h2"),
    ] 
    ),
]
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);