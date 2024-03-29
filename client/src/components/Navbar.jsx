import React, { useContext } from 'react';
import Logo from '../img/monke.png';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <img src={Logo} alt="Monke" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6> ART </h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6> SCIENCE </h6>
          </Link>
          <Link className="link" to="/?cat=tech">
            <h6> TECH </h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6> CINEMA </h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6> FOOD </h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span
              onClick={() => {
                logout();
                navigate('/login');
              }}
            >
              Logout
            </span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
