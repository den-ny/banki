import './App.css';
import Nav from "./components/Nav"
import Card from "./components/Card.jsx"
import { useEffect, useState } from 'react';
function App() {
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    setRefresh(false)
  }, [refresh])

  const handleClick = () => {
    setRefresh(true)
  }
  return (
    <div>
      <Nav />
      <div className="button-container">
        <button className="button" onClick={handleClick}>Refresh</button>
      </div>
      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
