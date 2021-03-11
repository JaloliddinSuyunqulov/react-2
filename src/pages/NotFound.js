import React from 'react';
import {Row, Container, Col} from "reactstrap";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={{size: 6, offset: 3}} className='vh-100 d-flex align-items-center justify-content-center'>
                        <Link to='/' className='text-center'>
                            <img src="images/NotFound.png" alt="Error" className='w-100'/>
                            <h3 className='mt-4'>Click the image to back home</h3>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;