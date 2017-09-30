import React from 'react';
import Title from '../Title';
import { Row, Col, Navbar, NavbarBrand, NavItem } from 'reactstrap'

const styles = {
  logo: {

  },
  title: {
    
  },
}

const TitleBar = () => {
  return(
    <div>
    <Navbar style={{backgroundColor: "#e9e9e9"}}>
      <Row>
        <Col xs="6" sm="6" md="6">
          <img className='logo' src='./images/citylogo_db.png' />
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


{/* <img src='./images/citylogo_db.png'></img>
<Title /> */}