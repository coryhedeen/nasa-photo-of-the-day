import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import CardContainer from './components/CardContainer';


function App() {
const [photo, setPhoto] = useState([]);

useEffect(() => {
  axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15")
      .then(res => { console.log(res.data);
        setPhoto(res.data)
      })
      .catch(err => console.log(err))
}, [])

  return (
    <div className="App">
      <CardContainer data={photo} />
    </div>
  );
}

export default App;
