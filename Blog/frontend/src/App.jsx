import axios from "axios";
import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("signup");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(null);

  const [blogs, setBlogs] = useState([]);

  /* ================= AUTH ================= */

  const handleSignUp = async () => {
    try {
      const res = await axios.post("http://localhost:2005/signup", {
        email,
        password,
      });
      alert(res.data.message);
      setStep("signin");
    } catch {
      alert("Signup failed");
    }
  };

  const handleSignIn = async () => {
    try {
      const res = await axios.post("http://localhost:2005/signin", {
        email,
        password,
      });
      alert(res.data.message);
      setStep("verify");
    } catch {
      alert("Signin failed");
    }
  };

  const handleVerify = async () => {
    try {
      const res = await axios.post(
        "http://localhost:2005/verify",
        { email, otp },
        { withCredentials: true }
      );
      alert(res.data.message);
      setStep("home");
      getBlogs();
    } catch {
      alert("OTP not verified");
    }
  };

  const handleSignOut = async () => {
    await axios.get("http://localhost:2005/signout", {
      withCredentials: true,
    });
    setStep("signin");
  };

  /* ================= BLOG ================= */

  const getBlogs = async () => {
    const res = await axios.get("http://localhost:2005/getBlogs", {
      withCredentials: true,
    });
    setBlogs(res.data);
  };

  useEffect(() => {
    if (step === "home") getBlogs();
  }, [step]);

  const fileRef = useRef(null);
  const handleSubmitBlog = async () => {
    if (!image) {
      alert("Please select an image");
      return;
    }

    const fd = new FormData();
    fd.append("title", title);
    fd.append("content", content);
    fd.append("author", author);
    fd.append("image", image);

    await axios.post("http://localhost:2005/createBlogs", fd, {
      withCredentials: true,
    });

    setTitle("");
    setContent("");
    setAuthor("");
    setImage(null);
    getBlogs();
    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  const handleDeleteBlog = async (id) => {
    await axios.delete(`http://localhost:2005/deleteBlogs/${id}`, {
      withCredentials: true,
    });
    getBlogs();
  };

  const handleUpdateBlog = async (id) => {
    const fd = new FormData();
    fd.append("title", title);
    fd.append("content", content);
    fd.append("author", author);
    if (image) fd.append("image", image);

    await axios.put(`http://localhost:2005/updateBlogs/${id}`, fd, {
      withCredentials: true,
    });
    getBlogs();
     setTitle("");
    setContent("");
    setAuthor("");
    setImage(null);

  };

  /* ================= UI ================= */

  /* ---------- AUTH PAGES ---------- */
 if (step !== "home") {
  return (
    <div className="auth-page">
      <div className="auth-wrapper">
        <div className="auth-card">
          <h1>
            {step === "signup" && "Create Account"}
            {step === "signin" && "Welcome Back"}
            {step === "verify" && "Verify OTP"}
          </h1>

          <p>
            {step === "signup" &&
              "Join our blogging community and start sharing your ideas."}
            {step === "signin" &&
              "Sign in to continue writing and reading amazing blogs."}
            {step === "verify" &&
              "Enter the OTP sent to your registered email address."}
          </p>

          {step !== "verify" && (
            <input
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
          )}

          {(step === "signup" || step === "signin") && (
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
          )}

          {step === "verify" && (
            <input
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          )}

          {step === "signup" && (
            <button onClick={handleSignUp}>Create Account</button>
          )}
          {step === "signin" && (
            <button onClick={handleSignIn}>Sign In</button>
          )}
          {step === "verify" && (
            <button onClick={handleVerify}>Verify OTP</button>
          )}
        </div>
      </div>
    </div>
  );
}


  /* ---------- BLOG PAGE ---------- */
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <span className="logo-icon">✍️</span>
          <span className="logo-text">Blogify</span>
        </div>

        <div className="nav-actions">
          <button className="logout-btn" onClick={handleSignOut}>
            Logout
          </button>
        </div>
      </div>

<div className="page-container">

  {/* CREATE BLOG */}
  <div className="create-blog">
    <h3>Create a New Blog</h3>
    <p>Share your thoughts, stories, and ideas with the world.</p>

    <input
      placeholder="Blog title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />

    <textarea
      placeholder="Write your blog content here..."
      value={content}
      onChange={(e) => setContent(e.target.value)}
    />

    <input
      placeholder="Author name"
      value={author}
      onChange={(e) => setAuthor(e.target.value)}
    />

    <label className="file-upload">
      Upload Image
      <input
        type="file"
        ref={fileRef}
        hidden
        onChange={(e) => setImage(e.target.files[0])}
      />
    </label>

    <button className="publish-btn" onClick={handleSubmitBlog}>
      🚀 Publish Blog
    </button>
  </div>

  {/* BLOG LIST */}
  <div className="blog-list">
    {blogs.map((blog) => (
      <div key={blog._id} className="blog-card">

        {blog.image && (
          <img
            src={`http://localhost:2005/uploads/${blog.image}`}
            alt="blog"
          />
        )}

        <div className="card-actions">
          <button
            className="edit-btn"
            onClick={() => handleUpdateBlog(blog._id)}
          >
            ✏️
          </button>
          <button
            className="delete-btn"
            onClick={() => handleDeleteBlog(blog._id)}
          >
            🗑️
          </button>
        </div>

        <div className="blog-content">
          <h2>{blog.title}</h2>
          <p>
            {blog.content.length > 120
              ? blog.content.slice(0, 120) + "..."
              : blog.content}
          </p>
          <small>✍ {blog.author}</small>
        </div>
      </div>
    ))}
  </div>

</div>

    </>
  );
}

export default App;
