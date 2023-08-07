// // import React from 'react';
// import {user} from './data.js'

// // console.log(React);
// console.log('hello worl!!', user.name);

// if (module.hot) {
//   module.hot.accept();
// }

import {createRoot} from "react-dom/client" 

const h2 = <h2>Hello World</h2>
const root = createRoot(document.getElementById('root'))
root.render(h2)
console.log('hello world!!!!!');