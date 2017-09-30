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
        <Col xs="12" sm="12" md="12">
          <div>
            <img className='logo' src='./images/citylogo_db.png' />
            <span className='title'>Event Parking Schedule</span>
          </div>
        </Col>
      </Row>
    </Navbar>
    </div>
  );
}

export default TitleBar;


{/* <img src='./images/citylogo_db.png'></img>
<Title /> */}