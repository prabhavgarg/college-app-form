import React, {useEffect} from "react";
import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Fees = () => {
    useEffect (() => {
        document.title = "Fees";
    }, []);

    return (
        <div style={{ position: 'relative', width: '1100px', height: '250px' }}>
            <img src="https://s7d2.scene7.com/is/image/fiserv/fiserv-programmable-payments-blog-hero-1022?ts=1678102412359&dpr=off" alt="Example"
                style={{ width: '100%', height: '80%', objectFit: 'cover' }} />
            <div
                style={{
                    position: 'absolute',
                    top: '0%',
                    left: '0%',
                    color: '#ffffff',
                    padding: '10px',
                }}>
                <h1>Fees & Eligibility</h1>
            </div>
            <br/>
            <br/>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Fees</th>
                        <th>Eligibility</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>B.Tech</td>
                        <td>₹50,000 (1st Year Fees)</td>
                        <td>10+2</td>
                        <td><Link className="list-group-item list-group-item-action" tag="a" 
                        to="/application-form" action style={{color: 'blue'}}>Apply Now {'>'}</Link></td>
                    </tr>
                    <tr>
                        <td>B.Sc</td>
                        <td>₹20,000 (1st Year Fees)</td>
                        <td>10+2</td>
                        <td><Link className="list-group-item list-group-item-action" tag="a" 
                        to="/application-form" action style={{color: 'blue'}}>Apply Now {'>'}</Link></td>
                    </tr>
                    <tr>
                        <td>B.B.A</td>
                        <td>₹35,000 (1st Year Fees)</td>
                        <td>10+2</td>
                        <td><Link className="list-group-item list-group-item-action" tag="a" 
                        to="/application-form" action style={{color: 'blue'}}>Apply Now {'>'}</Link></td>
                    </tr>
                    <tr>
                        <td>M.Tech</td>
                        <td>₹60,000 (1st Year Fees)</td>
                        <td>Graduation</td>
                        <td><Link className="list-group-item list-group-item-action" tag="a" 
                        to="/application-form" action style={{color: 'blue'}}>Apply Now {'>'}</Link></td>
                    </tr>
                    <tr>
                        <td>M.Sc</td>
                        <td>₹30,000 (1st Year Fees)</td>
                        <td>Graduation</td>
                        <td><Link className="list-group-item list-group-item-action" tag="a" 
                        to="/application-form" action style={{color: 'blue'}}>Apply Now {'>'}</Link></td>
                    </tr>
                    <tr>
                        <td>M.B.A</td>
                        <td>₹45,000 (1st Year Fees)</td>
                        <td>Graduation</td>
                        <td><Link className="list-group-item list-group-item-action" tag="a" 
                        to="/application-form" action style={{color: 'blue'}}>Apply Now {'>'}</Link></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Fees;