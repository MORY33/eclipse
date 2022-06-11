import { useState, useEffect } from "react";
import axios from "axios";
import Images from "./components/Images";
import { Box, CircularProgress, Typography } from "@mui/material"
import "./App.css"

export default function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const baseUrl = "https://api.unsplash.com";
    const amount = 26;


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
  </div>;
}