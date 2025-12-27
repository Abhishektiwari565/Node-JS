
import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [genre, setGenre] = useState("")
  const [releaseYear, setReleaseYear] = useState("")
  const [moviePoster, setMoviePoster] = useState("")
  const [img,setImg]=useState("")

  const handleSubmit=async()=>{
    const formdata= new FormData()
    formdata.append("title",title);
    formdata.append("description",description);
    formdata.append("genre",genre);
    formdata.append("releaseYear",releaseYear);
    formdata.append("moviePoster",moviePoster);
    try{
      const result=await axios.post("http://localhost:5000/",formdata)
      alert("movie added")
      setImg("http://localhost:5000/uploads/"+result.data.data.moviePoster)
      
    }catch(err){
      alert("movie not added");
      console.log("Movie not found"+err)
    }
  }

  
  return (
    <>
    <img src={img} alt="" />
      <div><input type="text" placeholder='Enter movie title...' value={title} onChange={(e)=>setTitle(e.target.value)}  /></div>
      <div><input type="text" placeholder='Enter movie description...' value={description} onChange={(e)=>setDescription(e.target.value)} /></div>
      <div><input type="text" placeholder='Enter movie genre...' value={genre} onChange={(e)=>setGenre(e.target.value)} /></div>
      <div><input type="number" placeholder='Enter movie releaseYear...' value={releaseYear} onChange={(e)=>setReleaseYear(e.target.value)} /></div>
      <div><input type="file" onChange={(e)=>setMoviePoster(e.target.files[0])} /></div>
      <div><button onClick={handleSubmit}>Submit</button></div>
      <div><button>Edit</button></div>
      <div><button>Delete</button></div>
    </>
  )
}

export default App
