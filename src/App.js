import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import Image from './components/Image';
import Title from './components/Title';
import Description from './components/Description';
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
      <p>
        <Title title={photo}/>
        <Image image={photo}/>
        <Description des={photo} />
      </p>
    </div>
  );
}

export default App;
