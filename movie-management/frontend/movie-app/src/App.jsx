import { useEffect, useState } from 'react'
import { useRef } from "react";
import axios from 'axios';
import './App.css'

function App() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [genre, setGenre] = useState("")
  const [releaseYear, setReleaseYear] = useState("")
  const [moviePoster, setMoviePoster] = useState(null)
  const [img, setImg] = useState("")
  const [fetchMovies, setFetchMovies] = useState([]);
  const [movieId, setMovieId] = useState("")
  const [isEdit, setIsEdit] = useState(false)

  

const fileRef = useRef(null);


  const handleSubmit = async () => {
    const formdata = new FormData()
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("genre", genre);
    formdata.append("releaseYear", releaseYear);
    formdata.append("moviePoster", moviePoster);
    try {
      const result = await axios.post("http://localhost:5000/", formdata);
      alert("movie added");
      getMovies();
      setMovieId(result.data.data._id);
      setImg("http://localhost:5000/uploads/" + result.data.data.moviePoster);
      clearInputField();
      
    } catch (err) {
      alert("movie not added");
    }
  }


  const getMovies = async () => {
    const res = await axios.get("http://localhost:5000/")
    setFetchMovies(res.data);
  }

  useEffect(() => { getMovies(); }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/${id}`);
      alert("movie deleted");
      getMovies();
    } catch (err) {
      alert("movie not deleted")
    }
  }

  const handleEdit = (movie) => {
    setTitle(movie.title);
    setDescription(movie.description);
    setGenre(movie.genre);
    setReleaseYear(movie.releaseYear);
    setMovieId(movie._id);
    setIsEdit(true);
    setImg("http://localhost:5000/uploads/" + movie.moviePoster);
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("genre", genre);
    formData.append("releaseYear", releaseYear);

    if (moviePoster) {
      formData.append("moviePoster", moviePoster);
    }

    try {
      await axios.put(`http://localhost:5000/${movieId}`, formData);
      alert("Movie updated");
      setIsEdit(false);
      getMovies();
      clearInputField();
    } catch (err) {
      alert("Movie not updated");
    }
  };

  const clearInputField=()=>{
    setTitle("");
    setDescription("");
    setGenre("");
    setReleaseYear("");
    setMoviePoster(null);
    setImg("")

     if (fileRef.current) {
    fileRef.current.value = ""; // ✅ THIS clears "dhurandhar.jpeg"
  }
  }

  return (
   <div className="layout">
  {/* LEFT PANEL */}
  <div className="sidebar">
    <h2>🎬 Movie Manager</h2>

    <input className="field" type="text" placeholder="Movie Title" value={title} onChange={(e) => setTitle(e.target.value)} />
    <input className="field" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
    <input className="field" type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
    <input className="field" type="number" placeholder="Release Year" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />
    <input className="field" type="file" ref={fileRef} onChange={(e) => setMoviePoster(e.target.files[0])} />

    {isEdit ? (
      <button className="btn update" onClick={handleUpdate}>Update Movie</button>
    ) : (
      <button className="btn add" onClick={handleSubmit}>Add Movie</button>
    )}
  </div>

  {/* RIGHT PANEL */}
  <div className="gallery">
    {fetchMovies.map((movie) => (
      <div className="movie-tile" key={movie._id}>
        <img src={`http://localhost:5000/uploads/${movie.moviePoster}`} />
        <div className="overlay">
          <h3>{movie.title}</h3>
          <p>{movie.genre} • {movie.releaseYear}</p>

          <div className="actions">
            <button onClick={() => handleEdit(movie)}>Edit</button>
            <button onClick={() => handleDelete(movie._id)}>Delete</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default App
