// const heading = React.createElement('h1',
//     { id: 'heading', xyz: 'abc' },
//     'hello world fromReact!');

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// console.log(heading);


const parent = React.createElement(
    'div',
    {id:'parent'},
    [
     React.createElement(
        'div',
        {id:'child1'},
        [
          React.createElement('h1', {id: 'h11'}, 'h11 tag'),
          React.createElement('h2', {id: 'h12'}, 'h12 tag')
        ]
     ),
     React.createElement(
        'div',
        {id:'child2'},
        [
          React.createElement('h1', {id: 'h21'}, 'h21 tag'),
          React.createElement('h2', {id: 'h22'}, 'h22 tag')
        ]
    )
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);