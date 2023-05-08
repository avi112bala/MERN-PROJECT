import React, { useEffect, useState } from "react";
import "../Signin.css"
import { useNavigate } from "react-router-dom";







const Signin = () => {

  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const navigate = useNavigate();
 
  
// useEffect(()=>{
//   const auth=localStorage.getItem('user');
//   if(auth){
//     navigate('/')
//   }
// },[])




const handlchange = async () => {
  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.status === 200 || data.email === email) {
      // Authentication successful
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    } else {
      // Authentication failed
      alert("Invalid email or password. Please try again.");
    }
  } catch (error) {
    console.log(error);
  }
};


 
  return (
    <div className="login">
      <h1 style={{ marginLeft: "6rem" }}>Signin</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Enter the password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handlchange} className="appButton" type="button">
        Signin
      </button>
    </div>
  );
};

export default Signin;
