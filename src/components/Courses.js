import React, {Component} from 'react';
import {Container, Table} from "reactstrap";

class Courses extends Component {
    render() {
        return (
            <div id='courses'>
                <Container>
                    <h2>Kurslar</h2>
                    <div className='d-flex overflow-auto'>
                        <Table className='mt-5'>
                            <thead>
                            <tr className='text-secondary'>
                                <th>Kurs nomi</th>
                                <th>Yo'nalish</th>
                                <th>Davomiyligi</th>
                                <th>Narxi</th>
                                <th/>
                                <th/>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Frontend Development</td>
                                <td>Dasturlash</td>
                                <td>3 oy</td>
                                <td>650 000 so'm</td>
                                <td><span className='icon icon-ECMA w-100'/></td>
                                <td>&#10230;</td>
                            </tr>
                            <tr>
                                <td>Backend Development</td>
                                <td>Dasturlash</td>
                                <td>3 oy</td>
                                <td>650 000 so'm</td>
                                <td><span className='icon icon-ECMA w-100'/></td>
                                <td>&#10230;</td>
                            </tr>
                            <tr>
                                <td>UX / UX PRO</td>
                                <td>Dizayn</td>
                                <td>5 oy</td>
                                <td>650 000 so'm</td>
                                <td><span className='icon icon-Aif w-75'/></td>
                                <td>&#10230;</td>
                            </tr>
                            <tr>
                                <td>Java Development</td>
                                <td>Dasturlash</td>
                                <td>3 oy</td>
                                <td>650 000 so'm</td>
                                <td><span className='icon icon-ECMA w-100'/></td>
                                <td>&#10230;</td>
                            </tr>
                            <tr>
                                <td>Python Development</td>
                                <td>Dizayn</td>
                                <td>3 oy</td>
                                <td>650 000 so'm</td>
                                <td><span className='icon icon-ECMA w-100'/></td>
                                <td>&#10230;</td>
                            </tr>
                            <tr>
                                <td>JS Development</td>
                                <td>Dasturlash</td>
                                <td>3 oy</td>
                                <td>650 000 so'm</td>
                                <td><span className='icon icon-ECMA w-100'/></td>
                                <td>&#10230;</td>
                            </tr>
                            <tr>
                                <td>Spring Development</td>
                                <td>Dasturlash</td>
                                <td>3 oy</td>
                                <td>650 000 so'm</td>
                                <td><span className='icon icon-ECMA w-100'/></td>
                                <td>&#10230;</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Courses;