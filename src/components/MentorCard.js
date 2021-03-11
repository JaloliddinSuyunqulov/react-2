import React, {Component} from 'react';

class MentorCard extends Component {
    render() {
        return (
            <div id='mentor-card'>
                <div className='d-flex align-items-center'>
                    <div><img src="images/PhotoUser_1.png" alt="Error"/></div>
                    <div className='mentor-name ml-3'>
                        <div>Jaspreet Bhamrai</div>
                        <div>Mentor</div>
                    </div>
                </div>
                <div className='line'/>
                <h2 className='mt-4 font-weight-bold'>
                    ZERO TO HERO UX/UI DESIGN
                </h2>
                <div className='d-flex'>
                    <div className='mentor-duration d-flex align-items-center'>
                        <img src="images/Alarm.png" alt="Error"/>
                        <div className='ml-2'>42 soat</div>
                    </div>
                    <div className='mentor-duration d-flex align-items-center'>
                        <img src="images/VideoIcon.png" className='ml-5' alt="Error"/>
                        <div className='ml-2'>32 soat</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MentorCard;