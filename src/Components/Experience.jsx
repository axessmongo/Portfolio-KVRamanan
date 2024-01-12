import React from "react";

function Experience() {
  return (
    
      <section className="container-fluid">
        <div className="row  mt-5 pt-5">
          <div className="col-lg-6 col-12 align-items-center ">
            <img
              src="https://kvramanan.com/wp-content/uploads/2022/12/feature-photo-6.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-6 col-sm-12  rounded-5">
            <div className="">
              <div className="text-center text-md-center">
                <p className="details-heading fw-bold">OUR WORKS</p>
                <h1 className="fw-bold mb-5">Best Working Experience</h1>
              </div>
              <div className="row mb-5 mb-md-3 mb-sm-3 justify-content-around">
                <div className="col-10 py-3 rounded-4 exp-card">
                  <h4 className="details-heading  fw-bold">
                    Software Engineer
                  </h4>
                  <p>
                    Mapps Info tech Private Limited, November 2018 - March 2023
                    Chennai
                  </p>
                  <div className="btn1">
                    <button className="btn btn-primary px-4 py-2 heading3">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div className="row mb-5 mb-md-3 mb-sm-3 justify-content-around">
                <div className="col-10 py-3 rounded-4 exp-card ">
                  <h4 className="details-heading  fw-bold">
                    Associate Software Engineer
                  </h4>
                  <p>
                    Appright Software Solutions Pvt Ltd, February 2014 -
                    November 2018 Bengaluru
                  </p>
                  <div className="btn1">
                    <button className="btn btn-primary px-4 py-2 heading3">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div className="row mb-5 mb-md-3 mb-sm-3 justify-content-around">
                <div className="col-10 py-3 rounded-4 exp-card">
                  <h4 className="details-heading  fw-bold">
                    Software Test Engineer
                  </h4>
                  <p>
                    Valley Info systems Pvt Ltd, May - 2014 to till date in
                    Benagluru
                  </p>
                  <div className="btn1">
                    <button className="btn btn-primary px-4 py-2 heading3">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Experience;
