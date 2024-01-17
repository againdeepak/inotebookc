import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
  const history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      //Save the auth token and redirect
      localStorage.setItem('token', json.authtoken)
      props.showAlert("Account created successfully ", "success")

      history("/");
    }
    else {
      props.showAlert("Invalid credentials", "Denger")
    }

  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='signup'>
        <div>
          <h2>Create an account to use iNoteBook</h2>
        </div>
        <div className="form-group  mt-2">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" onChange={onChange} id="name" name='name' placeholder="johnsid" />
        </div>
        <div className="form-group  mt-2">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" onChange={onChange} id="email" name='email' aria-describedby="emailHelp" placeholder="xyz@email.com" />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="password">Password</label>
          <input type="password" onChange={onChange} className="form-control" id="password" name='password' placeholder="A[a-z/A-Z][$-&][1-10]" minLength={5} required />
        </div>
        <div className="form-group  mt-2">
          <label htmlFor="cpassword">Confirm password</label>
          <input type="password" onChange={onChange} className="form-control" id="cpassword" name='cpassword' placeholder="Password" minLength={5} required />
          <div className='d-flex justify-content-center mt-2'>
          <p>Already have member? <Link className=" nblogin" to="/login">Login</Link></p>
          </div>
        </div>
        <button type="submit" className="btn btn-light  mt-2" >Create an account</button>
      </form>
    </div>
  )
}

export default Signup
