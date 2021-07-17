import React from "react";
import footerLogo from "../assets/footerlogo.svg";
import globe from "../assets/globe.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import mail from "../assets/mail.svg";
import arrow from "../assets/footer-arrow.svg";
const Footer = () => {
  return (
    <div className='footer container-fluid'>
      <div className='d-md-flex justify-content-between px-4'>
        <div className='justify-content-start'>
          <div className='d-flex flex-column'>
            <div className='footer-image d-flex justify-content-center'>
              <img src={footerLogo} className='img-fluid' alt='footer-img' />
            </div>
            <div className='footer-icons d-flex justify-content-center my-2'>
              <a href=''>
                <img src={globe} className='img-fluid px-2' alt='globe-icon' />
              </a>
              <a href=''>
                <img
                  src={twitter}
                  className='img-fluid px-2'
                  alt='twitter-icon'
                />
              </a>
              <a href=''>
                <img
                  src={instagram}
                  className='img-fluid px-2'
                  alt='instagram-icon'
                />
              </a>
              <a href='#'>
                {" "}
                <img src={mail} className='img-fluid px-2' alt='mail-icon' />
              </a>
            </div>
          </div>
        </div>
        <div className='  d-flex align-items-center justify-content-center'>
          <div className='get-early-access'>
            <a href='#' className='text-decoration-none grad'>
              <h6>
                Get early access for Bread{" "}
                <img src={arrow} className='img-fluid' alt='arrow-icon' />
              </h6>
            </a>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <div className='flex-row'>
            <a
              href='#'
              className='text-decoration-none'
              style={{ color: "gray" }}
            >
              <div>Privacy policy</div>
            </a>
            <a
              className=''
              href='#'
              className='text-decoration-none'
              style={{ color: "gray" }}
            >
              <div>Terms of Uses</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
