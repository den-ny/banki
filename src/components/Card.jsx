import Landing from "./Landing"
const Card = () => {
  const random = Math.floor(Math.random() * 170) + 1;
  return (
    <div className="card">
      <Landing cardNum={random} />
    </div>
  )

}

export default Card