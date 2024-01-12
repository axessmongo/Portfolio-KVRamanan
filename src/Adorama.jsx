import React from 'react'
import card1 from './Assets/Images/cardimg.png'


export default function Adorama() {
  return (
   <section className='container heading4'>
     <div className='mb-5'>
        <img src={card1} className='img-fluid pt-5 px-5' alt="" />
    </div>
    <div className='d-flex flex-wrap justify-content-evenly heading4'>
                <div className=''>
                    <p ><span className=' heading7'>Project</span>  <span className='fs-bold heading6' style={{color:"#fd562a"}}> :  Adorama </span></p> 
                    </div>
                    <div className=''>
                    <p> <span className='heading7'>Client</span>  <span className='fs-bold heading6' style={{color:"#fd562a"}}>: U.S.A </span></p> 
                    </div>   
                    <div className=''>
                    <p><span className='heading7'>Domain</span>  <span className='fs-bold heading6' style={{color:"#fd562a"}}> :  E-commerce </span></p> 
                    </div> 
                
                    </div>
        <div className=' pt-3'>
            <h4 className='fw-bold heading6 '>Project Description:</h4>
            <p className='pt-2'>Adorama is a camera, electronics, and film equipment retailer launched in 1974. They have online shopping websites Adorama, Sunny Sports, Leisure Pro, and Scuba.com & PRINTIQUE. They also have a large multi-floor Chelsea store, which is located at 42 West, 18th Street, New York City, New York.</p>
        </div >
       
        <div className=' pt-3'>
        <h4 className='fw-bold heading6'>Role & Job Responsibilities:</h4>
        <ul className='card-li'>
  <li>Participated in Agile process backlog grooming, Sprint planning, Story point estimation, Daily stand ups, Sprint demo, and Retrospectives.</li>
  <li>Developed test plan and test cases.</li>
  <li>Test case execution and defect reporting in JIRA.</li>
  <li>Collaborated with different teams to work on high severity and high priority issues.</li>
  <li>Coordination with each product owner for integration testing.</li>
  <li>Coordination with Business users for UAT testing and Usability Testing Manual and Automated Testing Approaches adapted in Agile methodology.</li>
  <li>Automated test cases with Selenium Webdriver, Katalon Studio, TestNG.</li>
  <li>API Testing with Rest Assured, Postman, SwaggerUI.</li>
  <li>Identified web elements. Used XPath, XQuery, and CSS selectors to find dynamic elements.</li>
  <li>Automated cross-browser testing for IE, Chrome, and Firefox.</li>
  <li>Reported bugs into Jira.</li>
  <li>Coordination with Business users for UAT testing.</li>
  <li>Sent weekly progress reports to test manager.</li>
  <li>Create Training module for employees.</li>
  <li>Jenkin integration with MAVEN and TestNG Page object model and page factory implementation for Test suite.</li>
  <li>Data-driven testing using TestNG XML bind with CSV files.</li>
</ul>

        </div>
   </section>
  )
}
