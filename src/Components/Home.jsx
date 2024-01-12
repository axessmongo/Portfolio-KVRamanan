import React from 'react'
import { Link } from 'react-router-dom'
import Instaicon from '../Assets/Images/instaicon.png'
import Linkedin from '../Assets/Images/linkedin-icon.png'
import tool from '../Assets/Images/icons8-toolbox-64.png'
import setting from '../Assets/Images/icons8-wired-network-48 (1).png'
import operating from '../Assets/Images/icons8-windows-60.png'
import jira from '../Assets/Images/icons8-jira-60.png'
import git from '../Assets/Images/icons8-git-64.png'
import database from '../Assets/Images/icons8-database-60.png'
import Scroll from './Scroll'
import card1 from '../Assets/Images/cardimg.png'
import card2 from '../Assets/Images/card2img.png'
import card3 from '../Assets/Images/card3img.png'
import Locationicon from '../Assets/Images/icons8-location-48.png'
import experience from '../Assets/Images/experience.png'
import Kalyanan from '../Assets/Images/Kalyanan.jpg'
import Tech from '../Assets/Images/Tech.jpg'
import profile1 from '../Assets/Images/profile1.png'
import phoneicon from '../Assets/Images/icons8-phone-64.png'
import mailicon from '../Assets/Images/icons8-email-64.png'
import kvram from '../Assets/Images/kvram.png'
import kvram2 from '../Assets/Images/kvram2 (2).jpg'

function Home() {
  let gotoTop = (secID) => {
    const element = document.getElementById(secID);
    const navbarElement = document.querySelector('.navbar');

    if (navbarElement) {
      var navHeight = navbarElement.clientHeight;
      // Use navHeight as needed
    }
    if (element) {
      const topPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: topPosition - navHeight, behavior: 'smooth' });

    }

  }
  gotoTop();
  return (
    <div className='overflow-x-hidden find' >

      {/* Nav-Start */}
      <section className='nav-banner' id='home' >
        <nav className="navbar navbar-expand-lg" id='home-nav' data-aos="fade-right" data-aos-duration="600" style={{ backgroundColor: '#060525' }}>
          <div className="container-fluid">
            <Link className="navbar-brand" onClick={() => gotoTop('home')}>
              <img src={kvram2} className='kvrlogo' alt=" navlogo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-3 p-4 mb-lg-0 text-center ">

                <li className="nav-item heading6">
                  <a className="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('home')}>Home</a>
                </li>

                <li className="nav-item heading6">
                  <a className="nav-link active px-3 " aria-current="page" id='name-nav' onClick={() => gotoTop('aboutus')} >About Us</a>
                </li>
                <li className="nav-item heading6">
                  <a className="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('portfolio')}>Portfolio</a>
                </li>

                <li className="nav-item heading6">
                  <a className="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('technical')} >Technical</a>
                </li>


                <li className="nav-item heading6">
                  <a className="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('work')}>Work</a>
                </li>

                <li className="nav-item heading6">
                  <a className="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('testimonial')}>Testimonial</a>
                </li>

                <li className="nav-item border-end heading6">
                  <a className="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('contact')} >Contact</a>
                </li>

                <a href='https://www.instagram.com/kalyana_venkata_ramanan/' target="_blank">
                  <li className="nav-item px-2 pt-1">
                    {/* <a className="nav-link active px-3" aria-current="page" id='name-nav' href="#">oii</a> */}
                    <img src={Instaicon} alt="" className='head-icon' />
                  </li>
                </a>
                <a href='https://www.linkedin.com/in/kalyan-durai-664390274/' target="_blank">
                  <li className="nav-item pt-1">
                    {/* <a className="nav-link active px-3" aria-current="page" id='name-nav' href="#">oii</a> */}
                    <img src={Linkedin} alt="img-fluid" className='head-icon' />
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </nav>
        {/* Nav-End */}

        {/* Banner-Start */}

        <section className='container pt-5 mt-5' id='home'>
          <div className='row py-5 mt-2' data-aos="fade-left" data-aos-duration="700">

            <div className='col-md-6 d-flex justify-content-center align-items-center'>
              <div className='text-md-start text-center'>

                <h5 className='text-light heading9 fw-bold fs-5'>Hello, I'm</h5>
                <h1 className='text-light banner-head heading9'>Kalyana <span style={{ color: '#fd562a' }} > Venkata</span> Ramanan</h1>
                <h5 className='text-light heading9 fw-bold fs-5'>A passionate Full Stack Engineer from Chennai !</h5>
                <div className='py-4 my-4'>
                  <button className='banner-bts fw-bold fs-5 heading5' onClick={() => window.open('https://wa.me/9092570489', '_blank')} target="_blank">
                    Contact Me on WhatsApp
                  </button>

                </div>

              </div>
            </div>

            <div className='col-md-6 text-center'>
              <div className='pb-4 mb-4'>
                <img src={kvram} className='img-fluid rounded-3' alt="" />


              </div>

            </div>

          </div>
        </section>
      </section>
      {/* Banner-End */}

      {/* Career-Start */}
      <section className='container' id='aboutus'>
        <div className='text-center py-4 my-4' data-aos="fade-up-right" data-aos-duration="600">

          <h3 className='text-center mb-3 heading6 fs-2 fw-bold mt-3 ' style={{ color: "#fd562a" }}>Career Objective</h3>
          <p className='pt-2 mt-1 heading4'> An experienced Professional in Functional, Non-Functional, Globalization, UI Testing, API Testing,
            API Testing, and Automation Testing (Selenium Web driver with JAVA), wants to be associated with a
            progressive organization that can provide me with a dynamic work sphere, challenging assignments with
            responsibility that encourage creativity, and keeps in touch with the latest technologies/ trends in
            the testing field and have an urge and inclination for learning new technologies, a strong work ethic
            combined with a commitment to excellence in all projects undertaken.</p>

        </div>
      </section>
      {/* Career-End */}

      {/* Technical Start */}
      <section id='technical'>
        <div className='nav-banner' data-aos="fade-left" data-aos-duration="700">
          <div className='technical-skills mt-2'>
            <div className='container my-5 py-5'>

              <div className="tf-heading tf-heading-style-02 mb-5 text-center ">
                <h3 className='text-center heading6 fs-2 fw-bold pt-5 my-3' style={{ color: "#fd562a" }}>Technical Skills</h3>
              </div>
              <div className='row text-center g-3'>
                <div className='col-xl-3 col-lg-4'>
                  <div className='card custom-card p-5 h-100 '>
                    <div className='w-50 mx-auto wrap-icon p-3 rounded-3 mb-3'>
                      <img
                        src={tool}
                        // style={{backgroundColor:"red"}}
                        className="align-items-center  img-fluid"
                        alt=""
                      />
                    </div>
                    <p className='mb-3 heading6'>CI/CD Tools</p>
                    <div className='btn1'>
                      <button className='btn btn-primary px-4 py-2 heading3'>Read More</button>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-4'>
                  <div className='card custom-card p-5 h-100 '>
                    <div className='w-50 mx-auto wrap-icon p-3 rounded-3 mb-3'>
                      <img
                        src={setting}
                        // style={{backgroundColor:"red"}}
                        className="align-items-center  img-fluid"
                        alt=""
                      />
                    </div>
                    <p className='mb-3 heading6'>Frame Work</p>
                    <div className='btn1'>
                      <button className='btn btn-primary px-4 py-2 heading3'>Read More</button>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-4'>
                  <div className='card custom-card p-5 h-100 '>
                    <div className='w-50 mx-auto wrap-icon p-3 rounded-3 mb-3'>
                      <img
                        src={operating}
                        // style={{backgroundColor:"red"}}
                        className="align-items-center  img-fluid"
                        alt=""
                      />
                    </div>
                    <p className='mb-3 heading6'>Operating Systems</p>
                    <div className='btn1'>
                      <button className='btn btn-primary px-4 py-2 heading3'>Read More</button>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-4'>
                  <div className='card custom-card p-5 h-100 '>
                    <div className='w-50 mx-auto wrap-icon p-3 rounded-3 mb-3'>
                      <img
                        src={jira}
                        // style={{backgroundColor:"red"}}
                        className="align-items-center  img-fluid"
                        alt=""
                      />
                    </div>
                    <p className='mb-3 heading6'>Defect Management Tool</p>
                    <div className='btn1'>
                      <button className='btn btn-primary px-4 py-2 heading3'>Read More</button>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-4'>
                  <div className='card custom-card p-5 h-100 '>
                    <div className='w-50 mx-auto wrap-icon p-3 rounded-3 mb-3'>
                      <img
                        src={git}
                        // style={{backgroundColor:"red"}}
                        className="align-items-center  img-fluid"
                        alt=""
                      />
                    </div>
                    <p className='mb-3 heading6'>Version Controlling Tool</p>
                    <div className='btn1'>
                      <button className='btn btn-primary px-4 py-2 heading3'>Read More</button>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-4'>
                  <div className='card custom-card p-5 h-100 '>
                    <div className='w-50 mx-auto wrap-icon p-3 rounded-3 mb-3'>
                      <img
                        src={database}
                        // style={{backgroundColor:"red"}}
                        className="align-items-center  img-fluid"
                        alt=""
                      />
                    </div>
                    <p className='mb-3 heading6'>Database Management</p>
                    <div className='btn1'>
                      <button className='btn btn-primary px-4 py-2 heading3'>Read More</button>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-4'>
                  <div className='card custom-card p-5 h-100 '>
                    <div className='w-50 mx-auto wrap-icon p-3 rounded-3 mb-3'>
                      <img
                        src={setting}
                        // style={{backgroundColor:"red"}}
                        className="align-items-center  img-fluid"
                        alt=""
                      />
                    </div>
                    <p className='mb-3 heading6'>Web Services Testing</p>
                    <div className='btn1'>
                      <button className='btn btn-primary px-4 py-2 heading3'>Read More</button>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-4'>
                  <div className='card custom-card p-5 h-100 '>
                    <div className='w-50 mx-auto wrap-icon p-3 rounded-3 mb-3'>
                      <img
                        src={database}
                        // style={{backgroundColor:"red"}}
                        className="align-items-center  img-fluid"
                        alt=""
                      />
                    </div>
                    <p className='mb-3 heading6'>Automaton Testing </p>
                    <div className='btn1 heading3'>
                      <button className='  btn btn-primary px-4 py-2 '>Read More</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </section>
      {/* Technical end */}

      {/* portfolio start */}
      <section id='portfolio' className='m-5'>
        <div className="container"  >
          <h3 className='heading7' style={{ color: "#FD562A" }}>  ABOUT ME</h3>
          <h2 className='fs-25 fw-bolder heading6 fs-2 fw-bold '> Full Stack Engineer </h2>
          <div className="row">

            <div className="col-md-5" data-aos="zoom-in" data-aos-duration="800" >
              <img src={Kalyanan} className='img-fluid' alt="" />

            </div>
            <div className="col-md-7 heading5" data-aos="fade-left" data-aos-duration="800">
              <ul>
                <li>Over 9+ years of IT experience which includes 3+ years of Extensive experience as  a React JS Developer and 4+ years of Experience as a Django Developer and 2+ years of Experience as software Tester.</li>
                <li>Expertise in React JS framework to develop the SPA. Experienced in React JS and working with React Flux architecture.</li>
                <li>Experienced in working with Redux architecture using complex Object-Oriented concepts in improving the performance of the websites.</li>
                <li>Experienced in Creating the EC2 instances and Deploying of SPA on the AWSS3 bucket in Amazon web services.</li>
                <li>Expertise in EC2 Backup methods, ELB security and application logging using Cloud Trail integration with Kibana and Elastic search</li>
                <li>Experience on high-availability, fault tolerance, and auto-scaling in AWS Cloud formation. Experienced in creating the instances and deploying through Command Line Interface configuration.</li>
                <li>Experience in using React JS components, Forms, Events, Keys, Router, plusRedux, Animations and Flux concept.</li>
                <li>Extensive experience in developing web pages using</li>
                <li>HTML/HTML5, XML, DHTMLCSS/CSS3, SASS, LESS, JavaScript, React JS, Redux, Flex, AngularJS, JQuery, JSON, NodeJS, Ajax, JQUERY, Bootstrap.</li>
                <li>Experienced in MERN stack development MongodB, Express, Node, and ReactJS. Experience in all phase of SDLC like Requirement Analysis, Implementation and Maintenance, and extensive experience with Agile and SCRUM.</li>

                <li>Good Expertise in analysing the Document Object Model (DOM) Layout, DOM Functions, and JavaScript functions, Cascading Styles across cross-browser using Fire Bug, Developer Tool Bar.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      {/* portfolio end */}

      {/* project start */}

      <section className='pt-5 m-5'>
        <div className='technical-skills'>
          <div className='container'>

            <div className=" mb-5 text-center">
              <h3 className='text-center mb-3 heading6 fs-2 fw-bold mt-3 ' data-aos="fade-up" data-aos-duration="800" style={{ color: "#fd562a" }}>WORK PROJECTS</h3>

            </div>
            <div className='row'>

              <div className='col-md-4' data-aos="zoom-in" data-aos-duration="600">
                <Link to="/adorama" className='text-decoration-none'>
                  <div className='card custom-card2 px-2 py-2 rounded-4'>
                    <div className=''>
                      <img src={card1} className='img-fluid rounded-4' alt="" />
                    </div>

                    <h3 className='heading7 pt-4 pb-3 fs-4' style={{ color: "#222" }}>  Adorama</h3>


                  </div>
                </Link>
              </div>


              <div className='col-md-4' data-aos="zoom-in" data-aos-duration="600">
                <Link to='/bny' className='text-decoration-none'>
                  <div className='card custom-card2 px-2 py-2 rounded-4'>
                    <div className=''>
                      <img src={card2} className='img-fluid rounded-4' alt="" />
                    </div>

                    <h3 className='heading7 pt-4 pb-3 fs-4' style={{ color: "#222" }}> BNY Melon</h3>


                  </div>
                </Link>
              </div>

              <div className='col-md-4 ' data-aos="zoom-in" data-aos-duration="600">
                <Link to='/airpaz' className='text-decoration-none'>
                  <div className='card custom-card2 px-2 py-2 rounded-4'>
                    <div className=''>
                      <img src={card3} className='img-fluid rounded-4' alt="" />
                    </div>

                    <h3 className='heading7 pt-4 pb-3 fs-4' style={{ color: "#222" }}> Airpaz</h3>


                  </div>
                </Link>
              </div>


            </div>
          </div>

        </div>

      </section>

      {/* project end */}

      {/* Technical details start */}
      <section id='nav-banner'>
        <div className="overflow-hidden">
          <div className="details-bg">
            <div className="container py-5">
              <h1 className="text-center text-md-center text-light ">
                <h3 className='text-center mb-3 heading6 fs-2 fw-bold mt-3 ' data-aos="fade-up" data-aos-duration="800" style={{ color: "#fd562a" }}> Technical Details</h3>
              </h1>
              <div className="row justify-content-between py-5">
                <div className="col-md-6 col-lg-4 mt-md-3 rounded-5 details-card-bg   " data-aos="fade-right" data-aos-duration="600">
                  <div className="text-light p-3 mb-3  mb-md-0" >
                    <h4 className="details-heading heading7">Automation Testing Tools</h4>
                    <p className='heading9'>Selenium Web driver, Rest Assured</p>
                    <h4 className="details-heading heading7">Frame work</h4>
                    <p className='heading9'>Cucumber, TestNG</p>
                    <h4 className="details-heading heading7">Database</h4>
                    <p className='heading9'>MySQL, Oracle SQL, Mongo DB</p>
                    <h4 className="details-heading heading7">Defect Management tool</h4>
                    <p className='heading9'>JIRA, HPALM</p>
                  </div>
                </div>
                <div className=" col-md-6 col-lg-4 mt-md-3">
                  <div className="text-light p-3  mb-3 mb-md-0" data-aos="zoom-in" data-aos-duration="600">
                    <img
                      src={Tech}
                      className="img-fluid rounded-4"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 details-card-bg rounded-5 mt-md-3" data-aos="fade-left" data-aos-duration="600">
                  <div className="text-light p-3  mb-3 mb-md-0">
                    <h4 className="details-heading heading7">Languages</h4>
                    <p className='heading9'> JAVA, Python</p>
                    <h4 className="details-heading heading7">Frame work</h4>
                    <p className='heading9'>Git, Github and Bitbucket</p>
                    <h4 className="details-heading heading7">Database</h4>
                    <p className='heading9'>Jenkins, Docker</p>
                    <h4 className="details-heading heading7">Operating Systems</h4>
                    <p className='heading9'>Windows and Linux</p>
                    <h4 className="details-heading heading7">Web Services Testing Tools</h4>
                    <p className='heading9'>Postman, Postman, Rest Assured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Technical details end */}

      {/* work start */}
      <section className="container-fluid" id='work'>
        <h3 className='text-center heading6 fs-2 fw-bold pt-5 my-3 ' data-aos="fade-up" data-aos-duration="600" style={{ color: "#fd562a" }}>Best Working Experience</h3>

        <div className="row  mt-5 pt-5 ">
          <div className="col-lg-6 col-12 align-items-center " data-aos="zoom-in" data-aos-duration="600">
            <img
              src={experience}
              className="img-fluid mb-4"
              alt=""
            />
          </div>
          <div className="col-lg-6 col-sm-12  rounded-5" data-aos="fade-right" data-aos-duration="600">

            <div className="">
              <div className="text-center text-md-center">


              </div>
              <div className="row mb-5 mb-md-3 mb-sm-3 justify-content-around">
                <div className="col-10  rounded-4 exp-card">
                  <div className='py-3 px-3'>
                    <h3 className='heading7' style={{ color: "#FD562A" }}> Software Engineer</h3>
                    <p className='heading6'>
                      Mapps Info tech Private Limited, November 2018 - March 2023
                      Chennai
                    </p>
                    <div className="btn1 text-center text-lg-start">
                      <button className="btn btn-primary px-4 py-2 heading3">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-5 mb-md-3 mb-sm-3 justify-content-around">
                <div className="col-10 rounded-4 exp-card ">
                  <div className='py-3 px-3'>
                    <h3 className='heading7' style={{ color: "#FD562A" }}>Associate Software Engineer</h3>
                    <p className='heading6'>
                      Appright Software Solutions Pvt Ltd, February 2014 -
                      November 2018 Bengaluru
                    </p>
                    <div className="btn1 text-center text-lg-start">
                      <button className="btn btn-primary px-4 py-2 heading3 text-center">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-5 mb-md-3 mb-sm-3 justify-content-around">
                <div className="col-10  rounded-4 exp-card">
                  <div className='py-3 px-3'>
                    <h3 className='heading7 ' style={{ color: "#FD562A" }}> Software Test Engineer</h3>
                    <p className='heading6'>
                      Valley Info systems Pvt Ltd, May - 2014 to till date in
                      Benagluru
                    </p>
                    <div className="btn1 text-center text-lg-start">
                      <button className="btn btn-primary px-4 py-2 heading3 ">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* work end */}



      {/* testimonal start */}
      <section className='nav-banner' id="testimonial">
        <div>
          <div
            className="elementor-widget-container"

            style={{ margin: "2rem" }}
          >
            <div
              className="section-title text-center aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <h3 className='text-center heading6 fs-2 fw-bold pt-5 my-3 ' data-aos="fade-up" data-aos-duration="800" style={{ color: "#fd562a" }}>Testimonial</h3>

              <span
                className="subtitle sub-title text-light heading5"
                style={{ fontFamily: '"Montserrat", sans-serif' }} data-aos="fade-right" data-aos-duration="800"
              >
                What happy clients say about us ?
              </span>
            </div>
          </div>
          <div className="">
            <div className="carousel ">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner container">
                  <div className="carousel-item active" data-bs-interval="3000">
                    <div className="row p-3">
                      <div className="col-md-4 mb-5">

                        <div className='text-center pt-3 mt-3' data-aos="zoom-in" data-aos-duration="600">
                          <div>
                            <img src={profile1} alt="" className='w-50' />
                          </div>
                          <div className='text-light py-3 my-3' >
                            <h4 className='heading9 fw-bold fs-5'>Alfred James</h4>
                            <p className='heading5'>Web Developer</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8" data-aos="zoom-in" data-aos-duration="600">
                        <div className="user">
                          <div className="card-description " >
                            <div className="title-area">
                              <div className="title-info">
                                <h3 className="title heading9">Alfred James</h3>
                                <span className="date"> </span>
                              </div>

                              <div className="rating">
                                <ul className="p-0 mx-auto my-0">
                                  <li className="has-rating list-inline-item">
                                    <i className="star-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                      </svg>
                                    </i>
                                  </li>

                                  <li className="has-rating list-inline-item">
                                    <i className="star-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                      </svg>
                                    </i>
                                  </li>

                                  <li className="has-rating list-inline-item">
                                    <i className="star-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                      </svg>
                                    </i>
                                  </li>

                                  <li className="has-rating list-inline-item">
                                    <i className="star-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                      </svg>
                                    </i>
                                  </li>

                                  <li className="has-rating list-inline-item">
                                    <i className="star-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                      </svg>
                                    </i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="my-3 border"></div>
                            <div className="seperator"></div>
                            <p className="description heading5">Highly recommended. Respectful, polite, great communication,
                              understood our needs, and delivered more than what was expected.
                              There really is no need to look further than Kalyan and his team.
                              They added a lot more value with their insights and suggestions while
                              making sure we were happy with the key decisions.{" "}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                    <div className="row p-3">
                      <div className="col-md-4 mb-5">
                        <div className='text-center pt-3 mt-3' data-aos="zoom-in" data-aos-duration="600">
                          <div>
                            <img src={profile1} alt="" className='w-50' />
                          </div>
                          <div className='text-light py-3 my-3'>
                            <h4 className='heading9 fw-bold fs-5'>Adam Jones</h4>
                            <p className='heading5'>Web Developer</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8" data-aos="zoom-in" data-aos-duration="600">
                        <div className="user">
                          <div className="card-description ">
                            <div className="title-area">
                              <div className="title-info">
                                <h3 className="title heading9">Adam Jones</h3>
                                <span className="date"> </span>
                              </div>

                              <div className="rating">
                                <ul className="p-0 mx-auto my-0">
                                  <li className="has-rating list-inline-item">
                                    <i className="star-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                      </svg>
                                    </i>
                                  </li>

                                  <li className="has-rating list-inline-item">
                                    <i className="star-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                      </svg>
                                    </i>
                                  </li>

                                  <li className="has-rating list-inline-item">
                                    <i className="star-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                      </svg>
                                    </i>
                                  </li>

                                  <li className="has-rating list-inline-item">
                                    <i className="star-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                      </svg>
                                    </i>
                                  </li>

                                  <li className="has-rating list-inline-item">
                                    <i className="star-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                      </svg>
                                    </i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="my-3 border"></div>
                            <div className="seperator"></div>
                            <p className="description heading5">Kalyan’s understanding and execution are outstanding. He delivered
                              exceptional work on time and is always willing to go the customer satisfaction. His attention to detail is impressive,
                              and he consistently exceeds expectations. I highly recommend Kalyan to
                              anyone in need of a reliable, professional, and dedicated professional.{" "}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                    <div className="row p-3">
                      <div className="col-md-4 mb-5">
                        <div className='text-center pt-3 mt-3' data-aos="zoom-in" data-aos-duration="600">
                          <div>
                            <img src={profile1} alt="" className='w-50' />
                          </div>
                          <div className='text-light py-3 my-3'>
                            <h4 className='heading9 fw-bold fs-5'>Mega</h4>
                            <p className='heading5'>Web Developer</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8" data-aos="zoom-in" data-aos-duration="600">
                        <div className="user">
                          <div className="card-description ">
                            <div className="title-area">
                              <div className="title-info">
                                <h3 className="title heading9"> Mega</h3>
                                <span className="date"> </span>
                              </div>

                              <div className="rating">
                                <ul className="p-0 mx-auto my-0">
                                  <li className="has-rating list-inline-item">
                                    <i className="star-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                      </svg>
                                    </i>
                                  </li>

                                  <li className="has-rating list-inline-item">
                                    <i className="star-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                      </svg>
                                    </i>
                                  </li>

                                  <li className="has-rating list-inline-item">
                                    <i className="star-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                      </svg>
                                    </i>
                                  </li>

                                  <li className="has-rating list-inline-item">
                                    <i className="star-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                      </svg>
                                    </i>
                                  </li>

                                  <li className="has-rating list-inline-item">
                                    <i className="star-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                      </svg>
                                    </i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="my-3 border"></div>
                            <div className="seperator"></div>
                            <p className="description heading5">Kalyan is exceptional! His attention to detail, problem-solving
                              skills, and dedication to the project have been invaluable. The
                              high-quality code he and his team deliver is not only functional
                              but also efficient and easy to maintain. Thank you for your hard
                              work and expertise, Kalyan. Your efforts are greatly appreciated!{" "}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

            </div>
          </div>
        </div>

      </section>
      {/* testimonal end */}

      {/* footer Start */}
      <section id='contact'>
        <section className='container'>
          <div className='py-4 my-4'>
            <div className='text-center'>
              <h3 className='text-center mb-3 heading6 fs-2 fw-bold ' data-aos="fade-up" data-aos-duration="600" style={{ color: "#fd562a" }}> Get In Touch</h3>

            </div>
            <div className='row pt-2' data-aos="zoom-in" data-aos-duration="600">
              <div className='col-lg-5 pt-2'>
                <div className='d-flex '>
                  <div className='me-3 pt-1'>
                    <img src={Locationicon} alt="" className='footer-icon' />
                  </div>
                  <div>
                    <h3 className='heading7 fw-bold'>Address</h3>
                    <p className='heading6'>349-350 KA, Sreenivasa Nagar, Vallalkaari Street, Madipakkam, Chennai.</p>
                    <div className='btn1 pt-1 heading5 text-center text-lg-start'>
                      <a className='btn btn-primary px-4 py-2' href='https://maps.app.goo.gl/1SwzHfrC71xg3Equ9' target="_blank">Location</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 pt-2'>
                <div className='d-flex'>
                  <div className='me-3 pt-1'>
                    <img src={phoneicon} alt="" className='img-fluid footer-icon' />
                  </div>
                  <div className='w-100'>
                    <h3 className='heading7 fw-bold'>Phone</h3>
                    <p className='heading6'>+91 90925 70489</p>
                    <div className='btn1 pt-1 heading5 text-center text-lg-start'>
                      <a className='btn btn-primary px-4 py-2' href='tel:9092570489'  target="_blank">Contact here</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 pt-2'>
                <div className='d-flex'>
                  <div className='me-3 pt-1'>
                    <img src={mailicon} alt="" className='img-fluid footer-icon' />
                  </div>
                  <div className='w-100'>
                    <h3 className='heading7 fw-bold'>E-Mail</h3>
                    <p className='heading6'>kalyanaramanan66@gmail.com</p>
                    <div className='btn1 pt-2 heading5 text-center text-lg-start'>
                      <a className='btn btn-primary px-4 py-2' href='mailto:kalyanaramanan66@gmail.com' target="_blank">Go to</a>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        <div className='py-3 mt-3' style={{ backgroundColor: '#060525' }} >
          <div className=' text-center text-light pt-3 heading6' >
            <p > © 2023 @Kalyana Venkata Ramanan All Rights Reserved.</p>
          </div>
        </div>
      </section>

      {/* footer end */}

      <Scroll />


    </div>
  )
}

export default Home