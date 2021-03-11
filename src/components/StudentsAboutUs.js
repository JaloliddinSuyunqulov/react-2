import React, {Component} from 'react';
import {Container} from "reactstrap";
import Slider from 'react-slick';

class StudentsAboutUs extends Component {
    render() {
        const settings = {
            arrows: false,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div id='students-about-us' className='mt-5'>
                <Container>
                    <h2>Talabalarimiz biz <br/> haqimizda</h2>
                    <Slider {...settings} className='mt-4'>
                        <div className='carousel-ideas'>
                            <div className='bg-white carousel-content'>
                                <img src="images/Signs.png" alt="Error"/>
                                <div className='ml-4 mt-3'>
                                    <p>Ayni paytda TPS eng yuqori saviyadagi ma'lumot uzatish global tarmog'iga yuqori
                                        tezlikda kirish imkonini yaratuvchi xizmatni taklif eta oladigan itelektual va
                                        texnik quvvatga ega.</p>
                                    <h6 className='mt-4'>Taniya Perfilyeva</h6>
                                    <div>Java Bootcamp talabasi</div>
                                    <div className='carousel-image-mobile'>
                                        <img src="images/Photo.png" alt="Error" className='w-100 mt-3 pb-4'/>
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-image'>
                                <img src="images/Photo.png" alt="Error"/>
                            </div>
                        </div>
                        <div className='carousel-ideas'>
                            <div className='bg-white carousel-content'>
                                <img src="images/Signs.png" alt="Error"/>
                                <div className='ml-4 mt-3'>
                                    <p>Ayni paytda TPS eng yuqori saviyadagi ma'lumot uzatish global tarmog'iga yuqori
                                        tezlikda kirish imkonini yaratuvchi xizmatni taklif eta oladigan itelektual va
                                        texnik quvvatga ega.</p>
                                    <h6 className='mt-4'>Taniya Perfilyeva</h6>
                                    <div>Java Bootcamp talabasi</div>
                                    <div className='carousel-image-mobile'>
                                        <img src="images/Photo.png" alt="Error" className='w-100 mt-3 pb-4'/>
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-image'>
                                <img src="images/Photo.png" alt="Error"/>
                            </div>
                        </div>
                        <div className='carousel-ideas'>
                            <div className='bg-white carousel-content'>
                                <img src="images/Signs.png" alt="Error"/>
                                <div className='ml-4 mt-3'>
                                    <p>Ayni paytda TPS eng yuqori saviyadagi ma'lumot uzatish global tarmog'iga yuqori
                                        tezlikda kirish imkonini yaratuvchi xizmatni taklif eta oladigan itelektual va
                                        texnik quvvatga ega.</p>
                                    <h6 className='mt-4'>Taniya Perfilyeva</h6>
                                    <div>Java Bootcamp talabasi</div>
                                    <div className='carousel-image-mobile'>
                                        <img src="images/Photo.png" alt="Error" className='w-100 mt-3 pb-4'/>
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-image'>
                                <img src="images/Photo.png" alt="Error"/>
                            </div>
                        </div>
                        <div className='carousel-ideas'>
                            <div className='bg-white carousel-content'>
                                <img src="images/Signs.png" alt="Error"/>
                                <div className='ml-4 mt-3'>
                                    <p>Ayni paytda TPS eng yuqori saviyadagi ma'lumot uzatish global tarmog'iga yuqori
                                        tezlikda kirish imkonini yaratuvchi xizmatni taklif eta oladigan itelektual va
                                        texnik quvvatga ega.</p>
                                    <h6 className='mt-4'>Taniya Perfilyeva</h6>
                                    <div>Java Bootcamp talabasi</div>
                                    <div className='carousel-image-mobile'>
                                        <img src="images/Photo.png" alt="Error" className='w-100 mt-3 pb-4'/>
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-image'>
                                <img src="images/Photo.png" alt="Error"/>
                            </div>
                        </div>
                    </Slider>
                </Container>
            </div>
        );
    }
}

export default StudentsAboutUs;