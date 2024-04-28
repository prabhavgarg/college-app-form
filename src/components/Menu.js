import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/application-form" action>Application From</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/placement-details" action>Placement Details</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/fees" action>Fees & Eligibility</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/contactus" action>Contact Us</Link>
        </ListGroup>
    );
}

export default Menu;