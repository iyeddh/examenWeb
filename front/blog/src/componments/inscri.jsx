import { Await, Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import axios from "axios";
function Inscri() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const handleInputChange = (e, type) => {
    switch (type) {
      case "firstname":
        setError("");
        setFirstName(e.target.value);
        if (e.target.value === "") {
          setError("Firsname has left blank");
        }
        break;
      case "lastname":
        setError("");
        setLastName(e.target.value);
        if (e.target.value === "") {
          setError("Lastname has left blank");
        }
        break;
      case "username":
        setError("");
        setUsername(e.target.value);
        if (e.target.value === "") {
          setError("Username has left blank");
        }
        break;
      case "mail":
        setError("");
        setMail(e.target.value);
        if (e.target.value === "") {
          setError("mail has left blank");
        }
        break;
      case "password":
        setError("");
        setPassword(e.target.value);
        if (e.target.value === "") {
          setError("password has left blank");
        }
        break;
    }
  };
  const handleSubmit = () => {
    try {
      axios.post("/Register.php", {
        firstname,
        lastname,
        username,
        mail,
        password,
      });
      setMsg("Sign up successful");
    } catch (error) {
      setError("Error signing up");
      {
        alert("not connected");
      }
    }
  };
  return (
    <div className="inscription">
      <h1 className="titre">SIGN UP</h1>
      <form onSubmit={handleSubmit}>
        <p>
          {error !== "" ? (
            <span className="error">{error}</span>
          ) : (
            <span className="success">{msg}</span>
          )}
        </p>
        <label htmlFor="#"> FIRST NAME </label>
        <input
          type="text"
          value={firstname}
          onChange={(event) => handleInputChange(event, "firstname")}
        />
        <label htmlFor="#">LAST NAME</label>
        <input
          type="text"
          value={lastname}
          onChange={(event) => handleInputChange(event, "lastname")}
        />
        <label htmlFor="#">USERNAME</label>
        <input
          type="text"
          value={username}
          onChange={(event) => handleInputChange(event, "username")}
        />
        <label htmlFor="#">MAIL</label>
        <input
          type="mail"
          placeholder="XXXXXX@gmail.com"
          value={mail}
          onChange={(event) => handleInputChange(event, "mail")}
        />
        <label htmlFor="#">PASSWORD</label>
        <input
          type="password"
          id="pass"
          value={password}
          onChange={(event) => handleInputChange(event, "password")}
        />
        <button type="submit" className="btn-12">
          <span>SIGN UP</span>
        </button>
        <span>
          vous avez deja un compte <Link to="/Login">LOGIN</Link>
        </span>
        <span>
          <Link to="/index">tapper ici pour retourner au page Home</Link>
        </span>
      </form>
    </div>
  );
}
export default Inscri;
