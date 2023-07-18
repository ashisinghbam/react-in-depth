const container = React.createElement(
  "div",
  { className: "container", id: "subtitle" },
  React.createElement(
    "section",
    { className: "sec" },
    React.createElement("p", {}, "React is super awesome"),
    React.createElement("img", {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      style: {
        width: 200,
        backgroundColor: "teal",
        padding: 16,
        borderRadius: 8,
      },
    })
  ),
  React.createElement(
    "form",
    {},
    React.createElement(
      "div",
      { className: "input-group" },
      React.createElement("label", { htmlFor: "username" }, "Username:"),
      React.createElement("input", { id: "username" })
    ),
    React.createElement(
      "div",
      { className: "password-group" },
      React.createElement("label", { htmlFor: "password" }, "Password:"),
      React.createElement("input", { id: "password", type: 'password' })
    )
  )
)

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(container)

// root.render({
//   $$typeof: Symbol.for("react.element"),
//   type: "h2",
//   ref: null,
//   props: {
//     children: [
//       {
//         $$typeof: Symbol.for("react.element"),
//         type: "span",
//         ref: null,
//         props: {
//           children: [
//             {
//               $$typeof: Symbol.for("react.element"),
//               type: "button",
//               ref: null,
//               props: {
//                 children: "hello world",
//               },
//             },
//             {
//               $$typeof: Symbol.for("react.element"),
//               type: "a",
//               ref: null,
//               props: {
//                 children: "hello world",
//               },
//             },
//           ],
//         },
//       },
//       {
//         $$typeof: Symbol.for("react.element"),
//         type: "i",
//         ref: null,
//         props: {
//           children: "hello world",
//         },
//       },
//       {
//         $$typeof: Symbol.for("react.element"),
//         type: "b",
//         ref: null,
//         props: {
//           children: "hello world",
//         },
//       },
//     ],
//   },
// })

// const h2 = document.createElement('h2')
// h2.innerText = 'hello world!!'
// const root = document.querySelector('#root')
// root.append(h2)

// console.dir(h2)
