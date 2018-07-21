import React from 'react';

// import components

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.state = {
            selectedDay: undefined
        };
    }

    handleDayChange = (day) => {
        if (typeof this.props.dateChange === 'function') {
            this.props.dateChange(day.toLocaleDateString());
        }
    }

    handleHourChange = (e) => {
        if (typeof this.props.hourChange === 'function') {
            this.props.hourChange(e.target.value);
        }
    }

    render() {
        const {selectedDay} = this.state;
        return (
            <div>
                {selectedDay && <p>when (day and hour): {selectedDay.toLocaleDateString()}</p>}
                {!selectedDay && <p>choose a day</p>}
                <DayPickerInput onDayChange={this.handleDayChange}/>
                <input
                    className="event-hour"
                    onChange={this.handleHourChange}
                    value={this.props.hour}
                    placeholder='hh-mm'/>
            </div>
        );
    }
}