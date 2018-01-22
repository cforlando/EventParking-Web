import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import Spinner from 'react-spinkit';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import _ from 'underscore';

export default class CalendarContainer extends Component {
  constructor() {
    super();
    this.state = {
      dates: [],
      events: [],
      isParking: false,
      isLoaded: false,
    }
    BigCalendar.momentLocalizer(moment);
  }

  componentDidMount() {
    const eventsURL = "https://cfo-event-parking.herokuapp.com/events";
    axios.get(eventsURL, {
      crossDomain: true,
      headers: {'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'HEAD, GET, POST, PUT, PATCH, DELETE',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'}
    }).then((res) => { this.setState({ dates: res.data }); })
      .then((res) => {
        let updatedEvents = [];
        _.each(this.state.dates, (date) => {
          let pDate = date.split('-');
          updatedEvents.push({
             'title': 'Event Parking',
             'start': new Date(Number(pDate[0]), Number(pDate[1])-1, Number(pDate[2])),
             'end': new Date(Number(pDate[0]), Number(pDate[1])-1, Number(pDate[2])),
          });
        });
        this.setState({ events: updatedEvents });
      }).then((res) => {
        if(_.some(this.state.dates, (date) => {
          return date === moment().format('YYYY-MM-DD');
        })) {
          this.setState({ isParking: true });
        }
      }).then((res) => {
          this.setState({ isLoaded: true }); 
      })
    }

  render() {
    let parkingMessage = null, calendar = null;
    if (this.state.isLoaded) {
        calendar = <BigCalendar 
        events={this.state.events} 
        views={{
          'month': true,
          'agenda': false,
          'week': false,
          'day': false,
          'work_week': false
        }}
        toolbar={false}
      />
      if (this.state.isParking) {
        parkingMessage = <h2 style={{textAlign: "center", margin:"20px 0 20px 0"}}>YES! There is Event Parking Today!</h2>
      }
      else {
        parkingMessage = <h2 style={{textAlign: "center", margin:"20px 0 20px 0"}}>There is no Event Parking today.</h2>
      }
    } else { 
        parkingMessage = <h2 style={{textAlign: "center", margin: "20px 0 20px 0"}}>Loading...</h2>
        calendar = <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "300px" }}> 
                       <Spinner name="ball-spin-fade-loader" />
                   </div>
    }
    return(
      <div>
        { parkingMessage }
        { calendar }
      </div>
    );
  }
}
