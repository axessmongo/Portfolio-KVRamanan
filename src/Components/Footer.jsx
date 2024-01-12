import React from 'react'
import Locationicon from '../Assets/Images/location-icon.png'

function Footer() {
    return (
        <section>
            <section className='container'>
                <div className='py-4 my-4'>
                    <div className='text-center'>
                        <h1>GET IN TOUCH</h1>
                    </div>
                    <div className='row pt-5'>
                        <div className='col-lg-5 pt-2'>
                            <div className='d-flex '>
                                <div className='me-3 pt-1'>
                                    <img src={Locationicon} alt="" className='footer-icon' />
                                </div>
                                <div>
                                    <h3 className='fw-bolder'>Address</h3>
                                    <p>349-350 KA, Sreenivasa Nagar, Vallalkaari Street, Madipakkam, Kancheepuram.</p>
                                    <div className='btn1 pt-1'>
                                        <button className='btn btn-primary px-4 py-2'>Location</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 pt-2'>
                            <div className='d-flex'>
                                <div className='me-3 pt-1'>
                                    <img src={Locationicon} alt="" className='img-fluid footer-icon' />
                                </div>
                                <div>
                                    <h3 className='fw-bolder'>Phone</h3>
                                    <p className='pt-2 mt-2 fs-5'>+91 90925 70489</p>
                                    <div className='btn1 pt-2'>
                                        <button className='btn btn-primary px-4 py-2'>Contact Here</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 pt-2'>
                            <div className='d-flex'>
                                <div className='me-3 pt-1'>
                                    <img src={Locationicon} alt="" className='img-fluid footer-icon' />
                                </div>
                                <div>
                                    <h3 className='fw-bolder'>E-Mail</h3>
                                    <p className='pt-2 mt-2 fs-5'>kalyanaramanan66@gmail.com</p>
                                    <div className='btn1 pt-2'>
                                        <button className='btn btn-primary px-4 py-2'>Go to.,</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <div className='py-3 my-3' style={{ backgroundColor: '#060525' }}>
                <div className=' text-center text-light pt-3'>
                    <p > © 2023 @Kalyana Venkata Ramanan All Rights Reserved.</p>
                </div>
            </div>
        </section>
    )
}

export default Footer