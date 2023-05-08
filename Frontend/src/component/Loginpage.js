import React from 'react'

 const Loginpage = () => {
  return (
    <>
      <div className="login-form-container">
        <i className="fas fa-times" id="form-close" />
        <form action>
          <h3>login</h3>
          <input type="email" className="box" placeholder="enter your email" />
          <input
            type="password"
            className="box"
            placeholder="enter your password"
          />
          <input type="submit" defaultValue="login now" className="btn" />
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">remember me</label>
          <p>
            forget password? <p>click here</p>
          </p>
          <p>
            don't have and account? <p>Register now</p>
          </p>
        </form>
      </div>
    </>
  );
}

export default Loginpage