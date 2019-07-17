import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import Image from './components/Image';

function App() {
const [photo, setPhoto] = useState([]);

useEffect(() => {
  axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15")
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
}, [])


  return (
    <div className="App">
      <p>
        <Image image={photo}/>
      </p>
    </div>
  );
}

export default App;
