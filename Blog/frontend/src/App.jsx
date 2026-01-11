import axios from 'axios'
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("signup");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        "http://localhost:2005/signup",
        { email, password }
      );
      alert(res.data.message);
      setStep("signin"); // go to signin
    } catch {
      alert("signup failed");
    }
  };

  const handleSignIn = async () => {
    try {
      const res = await axios.post(
        "http://localhost:2005/signin",
        { email, password }
      );
      alert(res.data.message);
      setStep("verify"); // go to OTP
    } catch {
      alert("signin failed");
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
      setStep("home"); // logged in
    } catch {
      alert("not verified");
    }
  };

  const handleSignOut = async () => {
    try {
      const res = await axios.get(
        "http://localhost:2005/signout",
        { withCredentials: true }
      );
      alert(res.data.message);
      setStep("signin"); // back to signin
      setOtp("");
      setPassword("");
    } catch {
      alert("not signout");
    }
  };

  //For post a blog 
  const handleSubmitBlog = async () => {
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("content", content);
    formdata.append("author", author);
    formdata.append("image", image);
    try {
      const result = await axios.post("http://localhost:2005/createBlogs", formdata,{ withCredentials: true });
      alert(result.data.message);
    } catch (err) {
      console.log(err);
      alert("Blog not added")
    }
  }

  //for getting all the blogs
  const getBlogs=async()=>{
    const result=await axios.get("http://localhost:2005/getBlogs");
  }

  return (
    <>
      {step !== "home" && (
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      )}

      {(step === "signup" || step === "signin") && (
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      )}

      {step === "verify" && (
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      )}

      {step === "home" && (
        <>
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button onClick={handleSubmitBlog}>Create Blog</button>
        </>
      )}




      {step === "signup" && <button onClick={handleSignUp}>SignUp</button>}
      {step === "signin" && <button onClick={handleSignIn}>SignIn</button>}
      {step === "verify" && <button onClick={handleVerify}>Verify</button>}
      {step === "home" && <button onClick={handleSignOut}>SignOut</button>}

    </>
  );
}

export default App;
