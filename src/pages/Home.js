import React, {Component} from 'react';
import NavigationBar from "../components/NavigationBar";
import OnlineITAcademy from "../components/OnlineITAcademy";
import Courses from "../components/Courses";
import TeachingStyle from "../components/TeachingStyle";
import StudentsAboutUs from "../components/StudentsAboutUs";
import OurStudents from "../components/OurStudents";
import Footer from "../components/Footer";

class Home extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <OnlineITAcademy/>
                <Courses/>
                <TeachingStyle/>
                <div className='footer'>
                    <StudentsAboutUs/>
                    <OurStudents/>
                    <Footer/>
                </div>

            </div>
        );
    }
}

export default Home;