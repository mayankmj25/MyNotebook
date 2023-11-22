import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import "../css/common.css";
  

const Navbar = () => {
    let location = useLocation();
    let history=useHistory();
    const handlelogout=()=>{
        localStorage.removeItem('token');
        history.push("/login");
    }
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success  fixed-top" >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">MyNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/about"? "active": ""}`} to="/about">About</Link>
                        </li> */}

                    </ul>
                    {!localStorage.getItem('token')?<form className="d-flex"> 
                    <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                    <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                    </form>:<button onClick={handlelogout}className="btn btn-dark mx-1" > Logout </button>}
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar
