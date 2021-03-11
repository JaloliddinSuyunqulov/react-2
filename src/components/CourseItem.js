import React, {Component} from 'react';

class CourseItem extends Component {
    render() {
        return (
            <div className='course-video-content d-flex'>
                <div className='watched d-flex flex-column align-items-center justify-content-center'>
                    {this.props.case}
                </div>
                <div className='course-image'>
                    <img src={this.props.img} alt="Error" className='w-100'/>
                    <div className='course-video'><img src="images/YouTubeVideo2.png" alt="Error"/></div>
                </div>
                <div className='course-name d-flex justify-content-between flex-column'>
                    {this.props.name}
                    <div className='d-flex align-items-center'>
                        <img src="images/Alarm.png" alt="Error" className='mr-2'/>
                        4 Soat
                    </div>
                </div>
            </div>
        );
    }
}

export default CourseItem;