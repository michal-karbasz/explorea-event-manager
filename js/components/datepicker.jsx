import React from 'react';
import 'react-day-picker/lib/style.css';
// import components

import DayPickerInput from 'react-day-picker/DayPickerInput';

// import styled components

import { FormHour, FormParagraph } from './styled-components/new-event-style.jsx';

export default class DatePicker extends React.Component {

    constructor(props) {
        super(props);
        this.handleDayChange = this.handleDayChange.bind(this);

        this.state = {
            selectedDay: undefined,
        };
    }

    handleDayChange = (day) => {
        if (typeof this.props.dateChange === 'function') {
            this.props.dateChange(day.toLocaleDateString());
        }
    }

    runHourChange = (e) => {
        if (typeof this.props.hourChange === 'function') {
            this.props.hourChange(e.target.value);
        }
    }

    render() {
        const {selectedDay} = this.state;
        return (
            <div>
                {selectedDay && <FormParagraph>when (day and hour): {selectedDay.toLocaleDateString()}</FormParagraph>}
                {!selectedDay && <FormParagraph>choose a day</FormParagraph>}
                <DayPickerInput onDayChange={this.handleDayChange}/>
                <FormHour
                    type='time'
                    maxLength='5'
                    onChange={this.runHourChange}
                    value={this.props.hour}
                    placeholder='hh-mm'/>
            </div>
        );
    }
}