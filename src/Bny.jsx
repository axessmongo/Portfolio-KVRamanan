import React from 'react'
import card2 from './Assets/Images/card2img.png'


export default function Bny() {
  return (
   <section className='container heading4'>
     <div className='mb-5'>
        <img src={card2} className='img-fluid pt-5 px-5' alt="" />
    </div>
      <div className='d-flex flex-wrap justify-content-evenly heading4'>
                <div className=''>
                    <p ><span className=' heading7'>Project</span>  <span className='fs-bold heading6' style={{color:"#fd562a"}}> : BNY Melon</span></p> 
                    </div>
                    <div className=''>
                    <p> <span className=' heading7'>Client</span> <span className='fs-bold heading6' style={{color:"#fd562a"}}>  : New York</span> </p> 
                    </div>   
                    <div className=''>
                    <p><span className=' heading7'>Domain</span>  <span className='fs-bold heading6' style={{color:"#fd562a"}}>:  Banking Domain</span></p> 
                    </div>             
                    </div>
        <div className=' pt-3'>
            <h4 className='fw-bold heading6'>Project Description:</h4>
            <p className='pt-2'>This project was executed in Agile (iterative) mode. This project added Deposit Account functions on Customer web site prosperity banktx.com and Bank Officer Portal. The functions are Deposit Account Screening and Opening, Activating Debit Card, Changing PIN on an ATM/Debit Card, Reporting a lost/stolen ATM/Debit Card, Reporting a dispute, changing the joint Account Holders, Ordering Checks, etc. This project established new online and batch interfaces to Core Banking System, Debit Card Processor, Clarke American and other Banking vendors. This project is expected to reduce number of customer calls. This project implemented a rules engine for screening the new account applications for Fraud and Eligibility.</p>
        </div >
       
        <div className=' pt-3'>
        <h4 className='fw-bold heading6'>Role / Job Responsibilities:</h4>
        <ul className='card-li'>
  <li>Involved in Regression testing of each build during the various phases of the application using QTP.</li>
  <li>Automation of test scripts was done using QTP for test re-usability of different online transaction modules.</li>
  <li>Experience in the creation of library functions, Checkpoints, Data Validation Descriptive Programming using QTP 1 1.0.</li>
  <li>Experience in Data Driven and Keyword Driven testing.</li>
  <li>A proven track record of successfully implementing projects using waterfall.</li>
  <li>Responsible for updating and maintaining Quality Center for all the defects found during the functional and regression testing and follow up the bug life cycle.</li>
  <li>Used high-level dynamic response assertions, such as JSON count, JSON path match, and Reg Exp for all the test cases in order to assert and test the REST Services.</li>
  <li>Used SOAPUI to test SOA based architecture application to test SOAP services and RESTAPI with JSON/XML.</li>
  <li>Involved in creating Manual test case for functional stories and automating them for smoke and Regression Testing in each sprint cycle.</li>
  <li>Developed spatial data overlays and comparisons tests.</li>
  <li>Conducted Regression Testing, Smoke Testing, Cross-browser testing through automated testing tools like QA Wizard, Selenium, and cucumber along with Manual testing.</li>

</ul>

        </div>
   </section>
  )
}
