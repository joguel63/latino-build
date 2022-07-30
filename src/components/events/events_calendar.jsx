import React from 'react';
import { Calendar, Views, momentLocalizer  } from 'react-big-calendar';
import moment from 'moment';
import events from './events';
import 'react-big-calendar/lib/sass/styles.scss';
const localizer = momentLocalizer(moment);


let allViews = Object.keys(Views).map(k => Views[k])

const ColoredDateCellWrapper = ({ children }) =>
 React.cloneElement(React.Children.only(children), {
  style: {
   backgroundColor: 'lightblue',
  },
 })

const EventsCalendar = (props) => (
 <Calendar
  localizer={localizer}
  events={events}
  startAccessor="start"
  endAccessor="end"
  style={{ height: `${100}vh`, minHeight: "350px" }}
  components={{
   timeSlotWrapper: ColoredDateCellWrapper,
  }}

 />
)

export default EventsCalendar;