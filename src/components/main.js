import React from "react";
import card from "../assets/card.svg";
import background from "../assets/Background2.svg";
const MainSection = () => {
  return (
    <div className='mt-4 pt-4'>
      <div className='d-flex justify-content-center py-4 my-4'>
        <h1 className='fw-bold text-secondary'>
          <span className='text-primary'>Creators</span> are powerful
        </h1>
      </div>
      <div className='d-flex justify-content-end my-4 py-4'>
        <img
          src={background}
          className=' img-fluid position-absolute'
          alt='backgroundImage'
          style={{ zIndex: "-1" }}
        />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 mx-4 d-flex justify-content-center d-md-block'>
            <img src={card} className='img-fluid py-4 mt-4' alt='Card' />
          </div>
          <div className='col-sm-12 col-md-8 py-4 my-4 '>
            <div className='row justify-content-end pt-4'>
              <div className='col-sm-12 text-center text-md-end'>
                <h6 className='fw-bold text-primary'>
                  CREATORS SHAPE CULTURE.
                </h6>
              </div>
              <div className='col-sm-12 text-center text-md-end py-2 pt-1 fw-bold'>
                <h1>
                  2 in 3 twitter users agree that creators change and shape
                  culture
                </h1>
              </div>
              <div className='col-sm-12 tags text-center text-md-end pb-4 '>
                <div>
                  <span
                    className='badge rounded-pill px-4 py-2 my-2 mx-2 text-dark'
                    style={{ backgroundColor: "#FFDCE5" }}
                  >
                    #HiArmy
                  </span>{" "}
                  <span
                    className='badge rounded-pill px-4 py-2 my-2 mx-2 text-dark'
                    style={{ backgroundColor: "#D1F7C4" }}
                  >
                    #overdays
                  </span>
                </div>
                <div>
                  <span
                    className='badge rounded-pill px-4 py-2 my-2 mx-2 text-dark'
                    style={{ backgroundColor: "#FEE2D5" }}
                  >
                    #teamtrees
                  </span>{" "}
                  <span
                    className='badge rounded-pill px-4 py-2 m-2 text-dark'
                    style={{ backgroundColor: "#72DDC3" }}
                  >
                    #BTS
                  </span>
                </div>
                <div>
                  <span
                    className='badge rounded-pill px-4 py-2 m-2 text-dark'
                    style={{ backgroundColor: "#9CC7FF" }}
                  >
                    #boatarmy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid my-4 py-4'>
        <div className='heading px-4'>
          <h1
            className='text-center md-px-4 py-4 mt-4 md-mx-4'
            style={{ color: "#2256BA" }}
          >
            With #TweetsFromHome, express your love for your favourite creator.
          </h1>
        </div>
        <div className='para'>
          <h4 className='text-center'>
            Choose the top tweets that you absolutely admire to create your
            version of their #TweetsFromHome wall and simply share on Twitter.
          </h4>
        </div>
        <div className='search-section'>
          <div className='search  mt-4 py-2s' style={{ margin: "auto" }}>
            <div class='mb-3 mx-auto ' style={{ maxWidth: "390px" }}>
              {/* <span class='input-group-append'>
                        <button
                          class='btn btn-outline-secondary bg-white border-start-0 border-bottom-0 border ms-n5'
                          type='button'
                        >
                          <i class='fa fa-search'></i>
                        </button>
                      </span> */}
              <input
                type='search'
                class='form-control'
                id='exampleFormControlInput1'
                placeholder='                 Search your favourite creator '
              />
            </div>
          </div>
          <div className='button col-sm-12 d-flex justify-content-center mx-auto'>
            <button
              type='button'
              class='btn btn-primary rounded-pill px-3 mt-1 pt-2 pb-2 text-light fw-bold'
            >
              Sign in to continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
