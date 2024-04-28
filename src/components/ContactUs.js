import React, {useEffect} from "react";
import CardSample from "./CardSample";

const ContactUs = () => {
    useEffect (() => {
        document.title = "Contact Us";
    }, []);

    return (
        <div style={{ position: 'relative', width: '1100px', height: '250px' }}>
            <img src="https://www.liquiloans.com/images/bg-contactus.jpg" alt="Example"
                style={{ width: '100%', height: '90%', objectFit: 'cover' }} />
            <div
                style={{
                    position: 'absolute',
                    top: '0%',
                    left: '0%',
                    color: '#ffffff',
                    padding: '10px',
                }}>
                <h1>Contact</h1>
            </div>
            <div style={{ display: 'flex', gap: '20px', paddingTop: '30px', paddingLeft: '50px', paddingBottom: '20px' }}>
                <CardSample contact={{
                    name: "Mr. Prabhav Garg", dept: "Head of Department",
                    mob: "9643702773", email: "prabhav.garg.boss@gmail.com"
                }} />
                <CardSample contact={{
                    name: "Mr. Sandeep Kumar", dept: "Accounts Department",
                    mob: "9457823558", email: "sandeep.kumar@gmail.com"
                }} />
                <CardSample contact={{
                    name: "Call Us At", dept: "Customer Care",
                    mob: "9744338923", email: "galgotia.college@gmail.com"
                }} />
            </div>
        </div>
    );
}

export default ContactUs;