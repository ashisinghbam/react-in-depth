import { createRoot } from "react-dom/client"
import "./style.css"
import React from "react"

// const h1 = <h1>Hello World</h1>
// const card = <div className="card">
//   <img src="https://i.ibb.co/NmWmTb9/alexander-andrews-Wzs4-QEm-CUQ-unsplash.jpg" alt="iphone image"/>
//   <h2>iPhone</h2>
//   <p>Apple</p>
//   <p><b>$1000</b></p>
// </div>

function Card(props) {
  const { image, title, brand, price } = props
  return (
    <div className="card">
      <img src={image} alt="product image" />
      <h2>{title}</h2>
      <p>{brand}</p>
      <p>
        <b>${price}</b>
      </p>
    </div>
  )
}

const root = createRoot(document.getElementById("root"))
// const container = [
//   Card(1),
//   Card(2),
//   Card(3),
//   Card(4),
//   Card(5),
//   // card, card, card, card, card, card, card, card, card
// ]

// const h1 = <h1>Hwllow world</h1>
// console.log(h1);

function Card2() {
  return <h1>Aur ji, kya haal chaal XD</h1>
}

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return (
            <Card
              key={product.id}
              image={product.thumbnail}
              title={product.title}
              price={product.price}
              brand={product.brand}
            />
          )
        })}
      </div>
    )
  })

// console.log(product)
// const container2 =
// root.render({
//   $$typeof: Symbol.for("react.element"),
//   type: Card,
//   ref: null,
//   props: {
//       key: 1,
//       image: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
//       title: "iPhone",
//       price: "$1233",
//       brand: "Apple"
//   },
// })
// })

// root.render(
//   React.createElement(Card, {
//     key: 1,
//     image: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
//     title: "iPhone",
//     price: "$1233",
//     brand: "Apple"
// })
// )

// root.render(
//   <Card
//     key="1"
//     image="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
//     title="iPhone"
//     price="$899"
//     brand="Apple"
//   />
// )

// console.log(React.createElement(Card, {
//   key: "1",
//   image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//   title: "iPhone",
//   price: "$899",
//   brand: "Apple"
// }));

// <div className="container">
//       {data.products.map((product) => {
//         return Card({
//           key: product.id,
//           image: product.thumbnail,
//           title: product.title,
//           price: product.price,
//           brand: product.brand,
//         })
//       })}
//     </div>
