const Button = ({ imageUrl, buttonName, clickHandler, children }) => {
  console.log(children);
  return (
    <button onClick={clickHandler} title={buttonName}>
      {/* {children} */}
      <img src={imageUrl} alt={buttonName} />
    </button>
  )
}

export default Button
