import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import { API_URL } from "../commonVars";
import axios from "axios";

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

class HolidaysComponent extends Component {
  constructor() {
    super();
    this.state = {
      events: [
        {
          id: 0,
          title: "All Day Event very long title",
          allDay: true,
          start: new Date(2018, 1, 0),
          end: new Date(2018, 1, 1)
        },
        {
          id: 1,
          title: "Long Event",
          start: new Date(2018, 1, 7),
          end: new Date(2018, 1, 10)
        }
      ]
    };
  }

  componentDidMount() {
    axios.get(API_URL + "/holidays?size=1000").then(holidays => {
      const fromDataHolidays = holidays.data._embedded.holidays;
      const calHolidays = fromDataHolidays.map((holiday, i) => {
        return {
          id: i,
          title: holiday.descr,
          allDay: true,
          color: "green",
          start: new Date(holiday.date),
          end: new Date(holiday.date)
        };
      });
      console.log(calHolidays);
      this.setState({ events: calHolidays });
    });
  }

  render() {
    return (
      <div className="calendarContainer">
        <BigCalendar
          events={this.state.events}
          views={["month", "week", "day"]}
        />
        <br />
        <br />
      </div>
    );
  }
}

export default HolidaysComponent;
