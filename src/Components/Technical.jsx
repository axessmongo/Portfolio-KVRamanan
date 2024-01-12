import React from 'react'
import tool from '../Assets/Images/icons8-toolbox-64.png'
import setting from '../Assets/Images/icons8-wired-network-48 (1).png'
import operating from '../Assets/Images/icons8-windows-60.png'
import jira from '../Assets/Images/icons8-jira-60.png'
import git from '../Assets/Images/icons8-git-64.png'
import database from '../Assets/Images/icons8-database-60.png'






export default function Technical() {
    return (
        <section className='container'>
            <div className='technical-skills mt-5'>
                <div className='container'>

                    <div class="tf-heading tf-heading-style-02 mb-5 text-center">
                        <h2 class="tf-heading-title">Technical Skills</h2>
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

        </section>
    )
}
