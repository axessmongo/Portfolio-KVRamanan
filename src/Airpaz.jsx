import React from 'react'
import card3 from './Assets/Images/card3img.png'


export default function Airpaz() {
  return (

    <section className='container heading4'>

      <div  className='mb-5'>
        <img src={card3} className='img-fluid pt-5 px-5' alt="" />
      </div>
      <div className='d-flex flex-wrap justify-content-evenly  heading4'>
        <div className=''>
          <p ><span className=' heading7'>Project</span>  <span  className='fs-bold heading6' style={{color:"#fd562a"}}>: Airpaz</span></p>
        </div>
        <div className=''>
          <p> <span className=' heading7'>Client</span>  <span  className='fs-bold heading6' style={{color:"#fd562a"}}>: Travel Enthusiasts Worldwide</span></p>
        </div>
        <div className=''>
          <p><span className=' heading7'>Domain</span>  <span  className='fs-bold heading6' style={{color:"#fd562a"}}>:  Travel and Hospitality</span></p>
        </div>
      </div>
      <div className=' pt-3'>
        <h4 className='fw-bold heading6'>Project Description:</h4>
        <p className='pt-2'>The 'Airpaz' project, executed with an Agile methodology, focuses on enhancing the user experience for travelers on the airpaz.com platform. This comprehensive travel management software offers a suite of functions, streamlining the booking and management processes for flights, hotels, and various travel-related services.</p>
      </div >

      <div className=' pt-3'>
        <h4 className='fw-bold heading6'>Role / Job Responsibilities:</h4>
        <ul className='card-li'>
         
        
  <li>Rigorous testing of each software build to ensure the stability and reliability of the Airpaz platform.</li>
  <li>Automation: Using tools like Selenium and Cucumber for automating test scripts, ensuring reusability and efficiency across different modules of the application.</li>
  <li>Quality Assurance: Updating and maintaining a comprehensive quality assurance system to track and address defects found during functional and regression testing, following the bug life cycle.</li>
  <li>API Testing: Utilizing SOAPUI for testing the application's SOA-based architecture, ensuring the seamless functioning of SOAP services and RESTAPI with JSON/XML.</li>
  <li>Manual Test Case Development: Creating manual test cases for functional stories and automating them for both smoke and regression testing in each sprint cycle.</li>
  <li>Cross-Browser Testing: Conducting thorough testing across various browsers using automated testing tools such as QA Wizard and Selenium, complemented by manual testing protocols.</li>
</ul>

        
      </div>
    </section>
  )
}

