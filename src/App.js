import { useState, useEffect } from "react";
import axios from "axios";
import Images from "./components/Images";
import Footer from "./components/Footer";
import { Box, CircularProgress, Typography } from "@mui/material"
import "./App.css"
// import records from "./data.json"

export default function App() {
 const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const baseUrl = "https://api.unsplash.com";
    const amount = 26;
    // const size = "/100x100"
    // fit=crop&w=300&h=300
    // const accessKey = process.env.REACT_APP_ACCESSKEY;
    // https://api.unsplash.com/photos/random?client_id=T-1KTKJTKQx0OiYsjG1dcZ1JwihrJfrRhog7SmfhEeU&count=10

    // ${baseUrl}/photos/random?client_id=T-1KTKJTKQx0OiYsjG1dcZ1JwihrJfrRhog7SmfhEeU&count=10


    axios
      .get(`${baseUrl}/photos/?client_id=T-1KTKJTKQx0OiYsjG1dcZ1JwihrJfrRhog7SmfhEeU&count=${amount}`)
      .then(response => setImages([...images,...response.data]))
      .catch(err => setError(err))
      .finally(()=> setLoading(false))


  },[])

  if(loading){
    return(
      <Box mt={40} display="flex"
      justifyContent="center"
      alignItems="center"
    >
         <CircularProgress/>
      </Box>
    )
  }

  if (error){
    return(
      <Typography variant="h6" mt={20} color="red">
        Something Went Wrong
      </Typography>
    )
  }




 return <div className="App">
   {images.map(image=> (
     <Images url={image.urls.full} element={image.user.username} date = {image.created_at} key={image.id}/>
   ))}
   {/* <Footer/> */}
  </div>;
}