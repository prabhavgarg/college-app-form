import React, {useEffect} from "react";
import { Button, Card, CardHeader, ListGroup, ListGroupItem } from "reactstrap";

const PlacementDetails = () => {
    useEffect (() => {
        document.title = "Placement Details";
    }, []);

    return (
        <div style={{ position: 'relative', width: '1100px', height: '250px' }}>
            <img src="https://avpcas.org/wp-content/uploads/2022/01/img-placements.jpg" alt="Example"
                style={{ width: '100%', height: '60%', objectFit: 'cover' }} />
            <div
                style={{
                    position: 'absolute',
                    top: '0%',
                    left: '0%',
                    color: '#ffffff',
                    padding: '10px',
                }}>
                <h1>Career Planning Division</h1>
            </div>
            <br />
            <br />
            <p>
                Career Planning Division (CPD) looks after corporate relations, career guidance and placements of the students. It plays a major role in liaisoning with different industrial establishments and manufacturing units for curriculum based training, placements, guest lectures and skill development programs.<br /><br />
            </p>
            <img src="https://www.met.edu/uploadfile/images/dac-placement.jpg" alt="Example"
                style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
        </div>
    );
}

export default PlacementDetails;