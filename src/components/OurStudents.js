import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

class OurStudents extends Component {
    render() {
        return (
            <div id='our-students'>
                <Container>
                    <h2>Bizning talabalar yetakhi kompaniyalarda <br/> faoliyat yuritmoqda</h2>
                    <Row className='mt-5'>
                        <Col><div className='company-logos'><img src="images/AlfaBank.png" alt="Error" className=''/></div></Col>
                        <Col><div className='company-logos'><img src="images/mail.png" alt="Error" className=''/></div></Col>
                        <Col><div className='company-logos'><img src="images/MegaFon.png" alt="Error" className=''/></div></Col>
                        <Col><div className='company-logos'><img src="images/MicrosoftLogo.png" alt="Error" className=''/></div></Col>
                        <Col><div className='company-logos'><img src="images/MTC_Logo.png" alt="Error" className=''/></div></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default OurStudents;