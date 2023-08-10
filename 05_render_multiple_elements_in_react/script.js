import { createRoot } from "react-dom/client"
import "./style.css"

// const h1 = <h1>Hello World</h1>
// const card = <div className="card">
//   <img src="https://i.ibb.co/NmWmTb9/alexander-andrews-Wzs4-QEm-CUQ-unsplash.jpg" alt="iphone image"/>
//   <h2>iPhone</h2>
//   <p>Apple</p>
//   <p><b>$1000</b></p>
// </div>

function Card(key, image, title, brand, price) {
  return (
    <div className="card" key={key}>
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

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data)
    // const container2 =
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return Card(
            product.id,
            product.thumbnail,
            product.title,
            product.brand,
            product.price
          )
        })}
      </div>
    )
  })
