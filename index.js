// Imperative Way of Challenge
// -Create a new H1 element (createElement)
// -Give it some textContent
// -Add a class name "header"
// -Append it to the div using appendChild

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<h1 className="header">Hello, World!</h1>)