import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="container">
        <div>
          <Link to="/">MERN Blog</Link>
          <Link to="/posts">Posts</Link>
          {isAuthenticated && <Link to="/create">Create Post</Link>}
        </div>
        <div>
          {isAuthenticated ? (
            <>
              <span>Welcome, {user?.name}</span>
              <button onClick={logout} className="btn btn-primary" style={{marginLeft: '10px'}}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;