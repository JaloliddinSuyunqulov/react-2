import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

class Footer extends Component {
    render() {
        return (
            <div id='home-footer'>
                <Container>
                    <Row>
                        <Col md={2}>
                            <div className='footer-titles mb-4'>Asosiy</div>
                            <a href="#" className='d-block text-decoration-none text-secondary mt-2'>Loyiha haqida</a>
                            <a href="#" className='d-block text-decoration-none text-secondary mt-2'>Kurslar</a>
                            <a href="#" className='d-block text-decoration-none text-secondary mt-2'>Mentorlarga</a>
                            <a href="#" className='d-block text-decoration-none text-secondary mt-2'>Ommaviy oferta</a>
                            <a href="#" className='d-block text-decoration-none text-secondary mt-2'>Maxfiylik
                                siyosati</a>
                        </Col>
                        <Col md={2}>
                            <div className='footer-titles mb-4'>Qo'shimcha</div>
                            <a href="#" className='d-block text-decoration-none text-secondary mt-2'>Bizning jamoa</a>
                            <a href="#" className='d-block text-decoration-none text-secondary mt-2'>Biz bilan
                                hamkorlik</a>
                            <a href="#" className='d-block text-decoration-none text-secondary mt-2'>Bu qandahy
                                ishlaydi?</a>
                        </Col>
                        <Col md={3}>
                            <div className='footer-titles mb-4'>Qo'llab quvatlash</div>
                            <a href="#" className='d-block text-decoration-none text-secondary mt-2'>F.A.Q</a>
                            <a href="#" className='d-block text-decoration-none text-secondary mt-2'>Kontrakt</a>
                        </Col>
                        <Col md={5}>
                            <div className='footer-titles mb-4'>Biz bilan aloqa</div>
                            <h3 className='font-weight-bold'>(+998 90) 900-00-09</h3>
                            <a href="#" className='d-block text-decoration-none text-secondary mt-2'>
                                100011, Toshkent sh. Shayxontohur tumani, <br/> Zarqaynar ko'chasi, 3B uy
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;