import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';



export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }
  // handleDayChange(day) {
  //   this.setState({ selectedDay: day });
  // }
  handleDayChange = (day) => {
    if(typeof this.props.dateChange === 'function') {
      this.props.dateChange(day.toLocaleDateString());
      console.log('ok1')
    }
}


  render() {
    const { selectedDay } = this.state;
    return (
      <div>
        {selectedDay && <p>day: {selectedDay.toLocaleDateString()}</p>}
        {!selectedDay && <p>choose a day</p>}
        <DayPickerInput onDayChange={this.handleDayChange} />
      </div>
    );
  }
}