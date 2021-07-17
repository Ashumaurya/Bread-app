import React from "react";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <div className='container-fluid'>
      <nav class='navbar navbar-expand-lg navbar-light '>
        <div class='container-fluid'>
          <div>
            <a class='navbar-brand' href='#'>
              <img src={logo} alt='LOGO' />
            </a>
          </div>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div
            class='collapse navbar-collapse justify-content-end'
            id='navbarNav'
          >
            <ul class='navbar-nav'>
              <li class='nav-item my-2'>
                <a class='nav-link active' aria-current='page' href='#'>
                  <strong className='text-primary fs-6'>Sign In</strong>
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  <button
                    type='button'
                    class='btn btn-primary rounded-pill mx-4 fw-bold text-light grad shadow'
                    style={{ padding: "0.5em 4em 0.7em 4em" }}
                  >
                    Home
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
