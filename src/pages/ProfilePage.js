import React, {Component} from 'react';
import NavigationBar from "../components/NavigationBar";
import MentorCard from "../components/MentorCard";
import {Col, Container, Row} from "reactstrap";
import CourseVideoList from "../components/CourseVideoList";
import Footer from "../components/Footer";

class ProfilePage extends Component {
    render() {
        return (
            <div className='profile-page'>
                <NavigationBar/>
                <Container className='mt-5'>
                    <Row>
                        <Col xs={5}>
                            <MentorCard/>
                            <CourseVideoList/>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default ProfilePage;