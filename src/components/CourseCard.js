import React, {Component} from 'react';

class CourseCard extends Component {
    render() {
        return (
            <div className='course-card d-flex align-items-end justify-content-between'>
                <div className='course-card-content'>
                    <div>{this.props.title}</div>
                    {this.props.content}
                    <span>&#10230;</span>
                </div>
                <div>
                    <img src={this.props.img} alt="Error" className='w-100'/>
                </div>
            </div>
        );
    }
}

export default CourseCard;