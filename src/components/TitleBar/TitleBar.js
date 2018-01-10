import React from 'react';
import { Row, Col, Navbar } from 'reactstrap'

const TitleBar = () => {
  return(
    <div>
      <Navbar style={{backgroundColor: "#e9e9e9"}}>
        <Row>
          <Col xs="6" sm="6" md="6">
            <img className='logo' src='./images/citylogo_db.png' alt="City of Orlando Logo" />
          </Col>
          <Col xs="6" sm="6" md="6">
            <div className='title'>Event Parking Schedule</div>
          </Col>
        </Row>
      </Navbar>
    </div>
  );
}

export default TitleBar;
