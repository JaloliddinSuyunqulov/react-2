import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";
import CourseCard from "./CourseCard";

class OnlineItAcademy extends Component {
    render() {
        return (
            <div id='online-academy'>
                <Container>
                    <Row>
                        <Col md={6} className='text-white'>
                            <h1 className='academy-header'>Online <br/> IT-akademiya</h1>
                            <div className='mt-3 academy-content'>
                                1 yildan ortiq davom etadigan dasturlar. Ixtisoslikni noldan o'rganish, portfelni
                                yig'ish, rezyume tayyorlash va ta'lim jarayonida ish topish kafolatlangan.
                            </div>
                        </Col>
                        <Col md={6}>
                            <img src="images/BackgroundImage.png" alt="Error" className='w-100 d-md-block d-none'/>
                        </Col>
                    </Row>
                    <div className='academy-courses'>
                        <Container>
                            <Row>
                                <Col md={6} className='course-card-bg'>
                                    <CourseCard title="Java" content="Web Full stack Development" img='images/Java.png'/>
                                </Col>
                                <Col md={6} className='course-card-bg'>
                                    <CourseCard title="Android" content="Development" img='images/Android.png'/>
                                </Col>
                                <Col md={6} className='course-card-bg'>
                                    <CourseCard title="JS" content="Full stack Development" img='images/JS.png'/>
                                </Col>
                                <Col md={6} className='course-card-bg'>
                                    <CourseCard title="Python" content="Full stack Development" img='images/Python.png'/>
                                </Col>
                        </Row>
                        </Container>
                    </div>
                </Container>
            </div>
        );
    }
}

export default OnlineItAcademy;