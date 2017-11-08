import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
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
    }
    BigCalendar.momentLocalizer(moment);
  }

  componentDidMount() {
    // headers probably not needed for deployment; only included them
    // to get Chrome to stop fussing.
    axios.get('http://localhost:5000/events', {
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
      })
    }

  render() {
    let parkingMessage = null;
    if (this.state.isParking)
      parkingMessage = <h2>YES! There is Event Parking Today!</h2>
    else
      parkingMessage = <h2>There is no Event Parking today.</h2>
    return(
      <div>
        { parkingMessage }
        <BigCalendar
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
      </div>
    );
  }
}
