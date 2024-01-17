import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const history=useNavigate();
  const {showAlert}=props;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email:credentials.email, password:credentials.password })
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
      //Save the auth token and redirect
      localStorage.setItem('token',json.authtoken)
      showAlert("Logged in Successfully credentials","success")
      // console.log(showAlert);
      history("/");
    }
    else{

      showAlert("Invalid credentials","danger")
    }
  }
  const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]: e.target.value})
  }
  return (
    <div>
      <form onSubmit={handleSubmit}  className='login'>
        <div>
        <h2 className='heading'>Login to continue to iNoteBook</h2>

        </div>

        <div className="form-group my-3">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name='email' aria-describedby="emailHelp" placeholder="xyz@email.com" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" value={credentials.password} onChange={onChange} className="form-control" id="password" name='password' placeholder="[a-z/A-Z][$-&][1-10]" />
        </div>
        <button type="submit" className=" loginbtn">Login</button>
      </form>
    </div>
  )
}

export default Login
