import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  // const currentUser = {displayName:'Brian Kane'};
  const currentUser = false;

  return (
    <div>
      <nav className='navbar navbar-extend-lg'>
        <div className='container-fluid'>
          <Link to="/" className='navbar-brand text-white'>
            <h4>React Movie App</h4>
          </Link>
          <div className='d-flex text-white align-item-center'>
            {currentUser? (
              <>
              <h5 className='mb-0 text-capitalize'>{currentUser.displayName}</h5>
              <button className="ms-2 btn btn-outline-light">Log Out</button>
              </>
            ) : (
              <>
               <button className="ms-2 btn btn-outline-light" onClick={() => navigate('login')}>Login</button>
               <button className="ms-2 btn btn-outline-light" onClick={() => navigate('register')}>Register</button>
              </>
            )}
              
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
