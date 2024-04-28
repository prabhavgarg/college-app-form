import React from "react";
import { Card } from "react-bootstrap";

const CardSample = ({contact}) => {
    return (

        // name, department, mobile, email, flatno, area, pincode)
        <div>
            <Card style={{ width: '20rem', height: '16rem', }}>
                <Card.Body>
                    <Card.Title>{contact.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{contact.dept}</Card.Subtitle>
                    <Card.Text>
                        <hr/>
                        Mobile No : +91-{contact.mob} <br/>
                        Email Address : {contact.email} <br/>
                        Address : 607 - Wing A Gautam Nagar <br/>
                        MIDC Andheri East, Mumbai <br/>
                        Pincode - 400093
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardSample;