import { useState, useEffect } from "react";
import axios from "axios";
import Images from "./components/Images";

export default function App() {
 const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const baseUrl = "https://api.unsplash.com";
    const width = ""
    // const accessKey = process.env.REACT_APP_ACCESSKEY;

    // https://api.unsplash.com/photos/random?client_id=T-1KTKJTKQx0OiYsjG1dcZ1JwihrJfrRhog7SmfhEeU&count=10

    axios
      .get(`${baseUrl}/photos/random?client_id=T-1KTKJTKQx0OiYsjG1dcZ1JwihrJfrRhog7SmfhEeU&count=10`)
      .then(response => setImages([...images,...response.data]))
      // .catch(err => setError(err))
      // .finally(()=> setLoading(false))

  },[])



 return <div className="App">App
   <Images/>
   {images.map(image=> (
     <Images url={image.urls.thumb} element={image.user.username} date = {image.created_at} key={image.id}/>
   ))}
  </div>;
}