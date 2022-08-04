import Data from './Data'
const Landing = ({ cardNum }) => {

  let temp = []
  let getQuestion = () => {
    for (let i = cardNum; i < cardNum + 1; i++) {
      temp.push(<Data num={i} key={i} />)
    }
    return temp
  }

  return (
    <div>
      {getQuestion()}
    </div>
  )
}

export default Landing