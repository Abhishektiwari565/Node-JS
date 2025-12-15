import './App.css'
import axios from "axios"
import { useState } from "react"


function App() {

  const [selectedId, setSelectedId] = useState(null)
  const [twit, setTwit] = useState("")
  const [data, setData] = useState([])

  // GET
  const handleFetchAPI = async () => {
    const res = await axios.get("http://localhost:2500/")
    setData(res.data)
  }

  // POST (AUTO ID)
  const handlePostAPI = async () => {
    const autoId = Date.now()

    const res = await axios.post("http://localhost:2500/", {
      id: autoId,
      twit
    })

    setData([...data, res.data])
    setTwit("")
  }

  // PUT (USE SELECTED ID)
  const handlePutAPI = async () => {
    if (!selectedId) return alert("Select a twit first")

    await axios.put("http://localhost:2500/", {
      id: selectedId,
      twit
    })

    setData(data.map(item =>
      item.id === selectedId ? { ...item, twit } : item
    ))

    setTwit("")
  }

  // DELETE (USE SELECTED ID)
  const handleDeleteAPI = async () => {
    if (!selectedId) return alert("Select a twit first")

    await axios.delete(`http://localhost:2500/${selectedId}`)

    setData(data.filter(item => item.id !== selectedId))
    setSelectedId(null)
    setTwit("")
  }

 return (
  <div className="page">
    <div className="twitter-card">

      {/* Header */}
      <div className="header">
        <h2>Mini-Twitter-App</h2>
      </div>

      {/* Tweet Composer */}
      <div className="composer">
        <img
          className="avatar"
          src="https://i.pravatar.cc/50"
          alt="user"
        />

        <textarea
          placeholder="Drop your thoughts here…"
          value={twit}
          onChange={(e) => setTwit(e.target.value)}
        />

        <div className="actions">
          <button onClick={handlePostAPI}>Post</button>
          <button onClick={handleFetchAPI}>Get</button>
          <button onClick={handlePutAPI}>Update</button>
          <button onClick={handleDeleteAPI}>Delete</button>
        </div>
      </div>

      {/* Tweets */}
      <div className="feed">
        {data.map(item => (
          <div
            key={item.id}
            className={`tweet ${selectedId === item.id ? "active" : ""}`}
            onClick={() => {
              setSelectedId(item.id)
              setTwit(item.twit)
            }}
          >
            <img
              className="avatar"
              src="https://i.pravatar.cc/50"
              alt="user"
            />

            <div className="tweet-body">
              <div className="tweet-header">
                <span className="name">Krishna</span>
                <span className="username">@Krishna</span>
                <span className="time">· 1m</span>
              </div>

              <p>{item.twit}</p>

              <div className="icons">
                ❤️ 12 💬 4 🔁 2
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
)

}

export default App
