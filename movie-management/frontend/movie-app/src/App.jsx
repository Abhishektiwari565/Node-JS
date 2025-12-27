
import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [genre, setGenre] = useState("")
  const [releaseYear, setReleaseYear] = useState("")
  const [moviePoster, setMoviePoster] = useState("")
  const [img,setImg]=useState("")
  const [fetchMovies,setFetchMovies]=useState([]);
  const [movieId,setMovieId]=useState("")

  const handleSubmit=async()=>{
    const formdata= new FormData()
    formdata.append("title",title);
    formdata.append("description",description);
    formdata.append("genre",genre);
    formdata.append("releaseYear",releaseYear);
    formdata.append("moviePoster",moviePoster);
    try{
      const result=await axios.post("http://localhost:5000/",formdata);
      alert("movie added");
      setMovieId(result.data.data._id) ;
      setImg("http://localhost:5000/uploads/"+result.data.data.moviePoster);
      
    }catch(err){
      alert("movie not added");
      console.log("Movie not found"+err);
    }
  }


  const getMovies=async()=>{
    const res=await axios.get("http://localhost:5000/")
    setFetchMovies(res.data);
  }

  useEffect(()=>{getMovies();},[]);

  const handleDelete=async(id)=>{
    try{
      await axios.delete(`http://localhost:5000/${id}`);
      console.log("Delete id:",id);
      alert("movie deleted");
      getMovies();
      // setImg("");
      // setDescription("");
      // setGenre("");
      // setMovieId("");
      // setReleaseYear("");
      // setTitle("");
    }catch(err){
      console.log("Movie not deleted"+err)
      alert("movie not deleted")
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
      <div><button >Edit</button></div>
     

      {fetchMovies.map((movie)=>(
        <div key={movie._id}>
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          <p>{movie.genre}|{movie.releaseYear}</p>
          <img src={`http://localhost:5000/uploads/${movie.moviePoster}`} alt="" />
           <div><button onClick={()=>handleDelete(movie._id)}>Delete</button></div>
        </div>
      ))}
    </>
  )
}

export default App
