import React, {Component} from 'react';
import {Button, Card, CardBody, Collapse} from "reactstrap";
import CourseItem from "./CourseItem";

class CourseVideoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isOpen2: false,
            isOpen3: false,
        }
    }

    render() {

        const toggle = () => {
            this.setState({isOpen: !this.state.isOpen, isOpen2: false, isOpen3: false})
        };
        const toggle2 = () => {
            this.setState({isOpen2: !this.state.isOpen2, isOpen: false, isOpen3: false})
        };
        const toggle3 = () => {
            this.setState({isOpen3: !this.state.isOpen3, isOpen: false, isOpen2: false})
        };
        return (
            <div id='course-video-list' className='mt-3'>
                <div onClick={toggle} className='course-collapse d-flex align-items-center justify-content-between'
                     style={{marginBottom: '1rem'}}>
                    <div className={`${!this.state.isOpen ? 'opacity' : ''} d-flex`}>
                        <h2>1</h2>
                        <h5 className='ml-4 font-weight-normal'>Dasturlashga kirish va o'rnatish jarayoni</h5>
                    </div>
                    <div className={`${!this.state.isOpen ? 'rotate-arrow' : ''}`}><img src="images/ArrowTop.png" alt="Error"/></div>
                </div>
                <Collapse isOpen={this.state.isOpen}>
                    <CourseItem
                        case={<><div><img src="images/eye.png" alt="Error"/></div><div>Ko'rilgan</div></>}
                        name={<div>Dasturlashga kirish <br/> va o'rnatish jarayoni</div>}
                        img='images/course_1.png'
                    />
                    <div className='line'/>
                    <CourseItem
                        case={<div><img src="images/YouTube.png" alt="Error"/></div>}
                        name={<div>Boshlang'ich o'zgaruvchilar haqida <br/> ma'lumot</div>}
                        img='images/course_2.png'
                    />
                    <div className='line'/>
                    <CourseItem
                        name={<div>Int va Float tiplari <br/> farqlari</div>}
                        img='images/course_3.png'
                    />
                    <div className='line'/>
                    <CourseItem
                        name={<div>Boolean haqida to'liq <br/> ma'lumot</div>}
                        img='images/course_4.png'
                    />
                </Collapse>


                <div onClick={toggle2}
                     className='course-collapse d-flex align-items-center justify-content-between mt-3'
                     style={{marginBottom: '1rem'}}>
                    <div className={`${!this.state.isOpen2 ? 'opacity' : ''} d-flex`}>
                        <h2>2</h2>
                        <h5 className='ml-4 font-weight-normal'>Dasturda oddiy amallar bilan ishlash</h5>
                    </div>
                    <div className={`${!this.state.isOpen2 ? 'rotate-arrow' : ''}`}><img src="images/ArrowTop.png"
                                                                                         alt="Error"/></div>
                </div>
                <Collapse isOpen={this.state.isOpen2}>                    <CourseItem
                    case={<><div><img src="images/eye.png" alt="Error"/></div><div>Ko'rilgan</div></>}
                    name={<div>Dasturlashga kirish <br/> va o'rnatish jarayoni</div>}
                    img='images/course_1.png'
                />
                    <div className='line'/>
                    <CourseItem
                        case={<div><img src="images/YouTube.png" alt="Error"/></div>}
                        name={<div>Boshlang'ich o'zgaruvchilar haqida <br/> ma'lumot</div>}
                        img='images/course_2.png'
                    />
                    <div className='line'/>
                    <CourseItem
                        name={<div>Int va Float tiplari <br/> farqlari</div>}
                        img='images/course_3.png'
                    />
                    <div className='line'/>
                    <CourseItem
                        name={<div>Boolean haqida to'liq <br/> ma'lumot</div>}
                        img='images/course_4.png'
                    />
                </Collapse>


                <div onClick={toggle3}
                     className='course-collapse d-flex align-items-center justify-content-between mt-3'
                     style={{marginBottom: '1rem'}}>
                    <div className={`${!this.state.isOpen3 ? 'opacity' : ''} d-flex`}>
                        <h2>3</h2>
                        <h5 className='ml-4 font-weight-normal'>OOP dasturlash asoslari</h5>
                    </div>
                    <div className={`${!this.state.isOpen3 ? 'rotate-arrow' : ''}`}><img src="images/ArrowTop.png"
                                                                                         alt="Error"/></div>
                </div>
                <Collapse isOpen={this.state.isOpen3}>                    <CourseItem
                    case={<><div><img src="images/eye.png" alt="Error"/></div><div>Ko'rilgan</div></>}
                    name={<div>Dasturlashga kirish <br/> va o'rnatish jarayoni</div>}
                    img='images/course_1.png'
                />
                    <div className='line'/>
                    <CourseItem
                        case={<div><img src="images/YouTube.png" alt="Error"/></div>}
                        name={<div>Boshlang'ich o'zgaruvchilar haqida <br/> ma'lumot</div>}
                        img='images/course_2.png'
                    />
                    <div className='line'/>
                    <CourseItem
                        name={<div>Int va Float tiplari <br/> farqlari</div>}
                        img='images/course_3.png'
                    />
                    <div className='line'/>
                    <CourseItem
                        name={<div>Boolean haqida to'liq <br/> ma'lumot</div>}
                        img='images/course_4.png'
                    />
                </Collapse>
            </div>
        );
    }
}

export default CourseVideoList;