import React from 'react'
import card1 from '../Assets/Images/cardimg.png'
import card2 from '../Assets/Images/card2img.png'
import card3 from '../Assets/Images/card3img.png'
import { Link } from 'react-router-dom'


export default function Card() {
    return (
        <section className='pt-5'>
            <div className='technical-skills'>
                <div className='container'>

                    <div class=" mb-5 text-center">
                        <h5 className=' fw-bold'>OUR WORksS</h5>
                        <h1 className='fw-bolder'>Project</h1>
                    </div>
                    <div className='row'>
                      
                        <div className='col-md-4'>
                        <Link to="/Adorama" className='text-decoration-none'>
                            <div className='card custom-card2 px-2 py-2 rounded-4'>
                                <div className=''>
                                    <img src={card1} className='img-fluid rounded-4' alt="" />
                                </div>

                                <h4 className='pt-2 pb-0'>Project</h4>
                                <h2 className=''>Adorama</h2>

                            </div>
                            </Link>
                        </div>
                       

                        <div className='col-md-4'>
                            <Link to='/Bny' className='text-decoration-none'>
                            <div className='card custom-card2 px-2 py-2 rounded-4'>
                                <div className=''>
                                    <img src={card2} className='img-fluid rounded-4' alt="" />
                                </div>

                                <h4 className='pt-2 pb-0'>Project</h4>
                                <h2 className=''>BNY Melon</h2>

                            </div>
                            </Link>
                        </div>

                        <div className='col-md-4 '>
                            <Link to='/Airpaz' className='text-decoration-none'>
                            <div className='card custom-card2 px-2 py-2 rounded-4'>
                                <div className=''>
                                    <img src={card3} className='img-fluid rounded-4' alt="" />
                                </div>

                                <h4 className='pt-2 pb-0 '>Project</h4>
                                <h2>Airpaz</h2>

                            </div>
                            </Link>
                        </div>


                    </div>
                </div>

            </div>

        </section>


    )
}