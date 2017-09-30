import React, { Component } from 'react';
import Calendar from '../../components/Calendar';

export default class CalendarContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <Calendar /> 
      </div>
    );
  }
}
