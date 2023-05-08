import React, { useEffect, useState } from "react";
import "../Signin.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate();

  // useEffect(()=>{
  //     const auth=localStorage.getItem('user');
  //     if(auth){
  //       navigate('/')
  //     }
  // },[])

  




const collectData = async () => {
  console.log(name, email, password);

  try {
    const response = await fetch("http://localhost:5000/check-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (data.emailExists) {
      alert("Email already exists. Please use a different email.");
    } else {
      const result = await fetch("http://localhost:5000/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert("SignUp Successfully !");
      navigate("/signin");
    }
  } catch (error) {
    console.log(error);
  }
};









  return (
    <div className="register">
      <h1 style={{ marginLeft: "6rem" }}>Signup</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="inputBox"
        type="email"
        placeholder="Enter your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter the password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={collectData} className="appButton" type="button">
        Sign up
      </button>
    </div>
  );
};

export default Signup;
