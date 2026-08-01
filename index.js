// Challenge
// -Create a new H1 element (createElement)
// -Give it some textContent
// -Add a class name "header"
// -Append it to the div using the appendChild method


const h1 = document.createElement('h1')
h1.textContent = "Hello, World!"
h1.className = "header"
document.getElementById("root").appendChild(h1)