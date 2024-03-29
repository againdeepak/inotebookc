import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    let location = useLocation();
    const history=useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem('token');
        history('/login');
    }
    const styleCol={
        color:'black',
        backgroundColor:'white'
    }
    return (

        <nav className="navbar navbar-expand-lg  navbarstyle" >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNoteBook</Link>
                <button className="navbar-toggler"  data-bs-toggle="collapse" style={styleCol} data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse"  id="navbarSupportedContent" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/"?"active":""}`}  to="/home">Home</Link>
                            {/* <Link className="nav-link " to="/home">Home</Link> */}

                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/about'?"active":""}`} to="/about">About</Link>
                        </li>
                    </ul>
                   {!localStorage.getItem('token')?<form className="d-flex">
                        <Link className='  credi mx-1' to='/login'>Login</Link>
                        <Link className='  credi mx-1 ' to='signup'>Signup</Link>
                    </form>:<button className='btn btn-primary mx-1' onClick={handleLogout}>Logout</button>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
