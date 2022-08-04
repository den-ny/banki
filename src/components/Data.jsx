import { useEffect, useState } from "react"
import axios from 'axios'
import Card from "./Card.jsx"
const Data = ({ num }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://banki-bankend.herokuapp.com/question/all`);
      setData(response.data[num]);
    };
    getData();
  }, []);

  return (
    <div>
      <p>Category: {data.type}</p>
      <br />
      <p>Question:</p>
      <p>{data.question}</p>
    </div>
  )
}

export default Data
