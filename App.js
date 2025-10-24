import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.png';
import Header from './HeaderComponent'

// const heading = React.createElement('h1',
//     { id: 'heading', xyz: 'abc' },
//     'hello world fromReact!');

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// console.log(heading);


// const parent = React.createElement(
//     'div',
//     {id:'parent'},
//     [
//      React.createElement(
//         'div',
//         {id:'child1'},
//         [
//           React.createElement('h1', {id: 'h11'}, 'h11 tag'),
//           React.createElement('h2', {id: 'h12'}, 'h12 tag')
//         ]
//      ),
//      React.createElement(
//         'div',
//         {id:'child2'},
//         [
//           React.createElement('h1', {id: 'h21'}, 'h21 tag'),
//           React.createElement('h2', {id: 'h22'}, 'h22 tag')
//         ]
//     )
//     ]
// )

// //JSX
// const jsxHeading = <h1 id='heading' className='heading' tabIndex="5">Namaste React using JSX</h1>
// //const jsxImageTag = <img id='heading' className='heading' tabIndex="5" src={screenshot}></img>


// //React functional component
// //should starts with caps

// const Tittle = () => (
//   <h1 className='heading'>Tittle</h1>
// )
const number = 1000;
//can use JS code inside component using {}
// can render one component inside other (Component composition)
//console.log(logo)
const HeadingComponent = () => (
  <div id='container'>
    {/* <Tittle/> 
    <Tittle></Tittle>
    {number}
    {Tittle()} */}
    <Header></Header>
    <h2>{number+number}</h2>
    <h1 className='heading'>Namaste React tag using functional component</h1>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(jsxHeading);
root.render(<HeadingComponent/>);