import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import axios from "axios";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const handleChaneUserName = (e) => {
    setUsername(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/test.php", {
        username,
        password,
      });
      // Assuming the server responds with some data, you can handle it here
      console.log("Response from server:", response.data);
      // Example: If the server responds with a success message
      setResult("response.data.message"); // Assuming the server sends back a message
    } catch (error) {
      // Handle error
      console.error("Error:", error);
      // Example: If the server responds with an error message
      setResult("Login failed: " + error.message); // Display the error message
    }
  };

  return (
    <div className="auth">
      <h1 className="titre">LOGIN PAGE</h1>

      <form onSubmit={handleSubmit}>
        <span>{result}</span>
        <label htmlFor="user">USERNAME</label>
        <input
          type="text"
          placeholder="username or mail"
          value={username}
          onChange={(event) => handleChaneUserName(event)}
        />
        <label htmlFor="pass">donner le password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => handleChangePassword(event)}
        />
        <button type="submit" className="btn-12">
          <span>Log in</span>
        </button>
      </form>
      <span>
        vous navez pas du compte ? <Link to="/Inscri"> Inscrivez vous</Link>
      </span>
      <span>
        <Link to="/index">tapper ici pour retourner au page Home</Link>
      </span>
    </div>
  );
}
export default Login;
