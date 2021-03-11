import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

class TeachingStyle extends Component {
    render() {
        return (
            <div id='teaching-style' className='mt-5'>
                <Container>
                    <h2>O'qitish uslubi</h2>
                    <Row>
                        <Col>
                            <div className='teaching-style-item'>
                                <img src="images/Teacher.png" alt="Error"/>
                            </div>
                            <div className='mt-3'>Videodarslik</div>
                        </Col>
                        <Col>
                            <div className='teaching-style-item'>
                                <img src="images/Teacher.png" alt="Error"/>
                            </div>
                            <div className='mt-3'>Amaliyot</div>
                        </Col>
                        <Col>
                            <div className='teaching-style-item'>
                                <img src="images/Teacher.png" alt="Error"/>
                            </div>
                            <div className='mt-3 text-center'>Akademik qo'llab quvvatlash</div>
                        </Col>
                        <Col>
                            <div className='teaching-style-item'>
                                <img src="images/Teacher.png" alt="Error"/>
                            </div>
                            <div className='mt-3 text-center'>Sertifikat</div>
                        </Col>
                        <Col>
                            <div className='teaching-style-item'>
                                <img src="images/Teacher.png" alt="Error"/>
                            </div>
                            <div className='mt-3 text-center'>Ish bilan ta'minlash</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default TeachingStyle;