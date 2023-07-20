// const container = (
//   <div className="container" id="subtitle">
//     <section className="sec">
//       <p>React is super awesome</p>
//       <img
//         src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
//         style={{
//           width: 200,
//           backgroundColor: 'teal',
//           padding: 16,
//           borderRadius: 8,
//         }}
//       />
//     </section>
//     <form>
//       <div className="input-group">
//         <label htmlFor="username">Username:</label>
//         <input id="username" />
//       </div>
//       <div className="password-group">
//         <label htmlFor="password">Password:</label>
//         <input id="password" type="password" />
//       </div>
//     </form>
//   </div>
// )

const user = 'Ashi';
const h2 = /*#__PURE__*/React.createElement("h2", null, "Hello ", 5 + 9);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(h2);