import React, { useState } from 'react'
import '../index.css'

const Contact = () => {

  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[Msg,setMsg]=useState('');

    const handlechange=async(e)=>{
    e.preventDefault();
    console.log(name,email,Msg)
   const data={name,email,Msg};

   const response = await fetch("http://localhost:5000/send-email", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(data),
   });
   const body =await response.text();
   console.log(body)
    // alert("Thanks! we will contact you shortly")
  }
  return (
    <>
      {/* Title */}

      <div
        className="section"
        style={{ display: "block", justifyContent: "center" }}
      >
        <h1 className="heading">
          <span>C</span>
          <span>O</span>
          <span>N</span>
          <span>T</span>
          <span>A</span>
          <span>C</span>
          <span>T</span>
          <span className="space"></span>
          <span>U</span>
          <span>S</span>
          <span className="space"></span>
        </h1>
        {/* Title */}

        {/* <form className="maindiv-form" onSubmit={handlechange}>
          <div className="mb-3">
            <label
              htmlFor="name"
              className="form-label"
              style={{ fontWeight: "bold" }}
            >
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name "
              id='name'
              name='name'
              style={{
                background: "rgba(255, 255, 255, 0.5)",
                color: "black",
                padding: "10px",
                borderRadius: "10px",
              }}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="form-label"
              style={{ fontWeight: "bold" }}
            >
              Email address
            </label>
            <input
              type="email"
              id='email'
              name='email'
              className="form-control"
              placeholder="Enter Your Email"
              style={{
                background: "rgba(255, 255, 255, 0.5)",
                color: "black",
                padding: "10px",
                borderRadius: "10px",
              }}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="message"
              className="form-label"
              style={{ fontWeight: "bold" }}
            >
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              placeholder="Type Your Message Here"
              rows={5}
              required
              style={{
                resize: "vertical",
                background: "rgba(255, 255, 255, 0.5)",
                color: "black",
              }}
              onChange={(e) => setMsg(e.target.value)}
              value={Msg}
            />
          </div>
          <button
            type="submit"
            className="btn btn-warning"
            style={{
              marginTop: "1rem",
              // width: "100%",
              backgroundColor: "#e35e0a",
              color: "white",
              fontSize: "1.5rem",
            }}
          >
            Submit
          </button>
        </form> */}

        <div className="register">
          <form onSubmit={handlechange} className='send-email'>
            <input
              className="inputBox"
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="email"
              className="inputBox"
              placeholder="Enter Your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <textarea
              type="text"
              rows={5}
              placeholder="Type Your Message Here"
              className="inputBox"
              onChange={(e) => setMsg(e.target.value)}
              value={Msg}
            />
            <button onClick={handlechange} className="appButton">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact