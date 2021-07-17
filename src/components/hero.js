import HeroImage from "../assets/HeroRectangle102.jpg";
import HeroSvg from "../assets/HeroImage.svg";
const HeroArea = () => {
  return (
    <div className='hero container-fluid my-4 py-4'>
      <img
        className='position-absolute img-fluid'
        style={{ zIndex: "-1" }}
        src={HeroImage}
        alt='HeroImage'
      />
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img src={HeroSvg} className='img-fluid' alt='heroImage' />
          </div>
          {/* <div className='col d-none d-md-block '>
            this is hidden as it gets small
          </div> */}
          <div className='col-md-6 order-md-first'>
            <div className='container'>
              <div className='row row-col-1'>
                <div className='col-sm-12 mt-4 pt-4 d-none d-md-block'>
                  <div className='p-1'>
                    <h1>
                      Become a true <span>SUPERFAN</span>
                    </h1>
                  </div>
                  <p className='p-1'>
                    Support your favourite creator by sharing their
                    #TweetsFromHome wall with your loved ones and grow their
                    community.
                  </p>
                </div>
                <div className='col-sm-12 pt-4 mt-4'>
                  <div className='search'>
                    <div class='mb-3'>
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
                        placeholder='Search your favourite creator '
                      />
                    </div>
                  </div>
                </div>
                <div className='button col-sm-12 d-flex d-md-block justify-item-center'>
                  <button
                    type='button'
                    class='btn btn-primary rounded-pill px-3 mt-1 pt-1 pb-2 '
                  >
                    View Tweets From Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroArea;
