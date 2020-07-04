import React, { useState } from 'react';
import { Month, RangedSelect } from './form';
import moment from 'moment';

const today = new Date();
const todayMoment = moment();
const beginningDateMoment = moment('1995-06-15');

// helpers

const renderRangedOptions = (range) => {
    const [min, max] = range;
    const options = [];

    for (let i = min; i < max+1; i++) {
        // format 2-digit date, not 4-digit year
        const value = i < 1000 ? to2DigitString(i) : i;
        options.push(<option key={value} value={value}>{i}</option>);
    }

    return options;
};

const to2DigitString = n => ('0' + n).slice(-2);

// component

export default ({callback, errorMessage, setErrorMessage}) => {
    // setup state
    const currentYear = today.getFullYear();
    const [year, setYear] = useState(currentYear);
    const [month, setMonth] = useState(to2DigitString(today.getMonth()+1));
    const [day, setDay] = useState(to2DigitString(today.getDate()));

    // callbacks
    const onChange = event => {
        const hooks = {
            year: setYear,
            month: setMonth,
            day: setDay
        }
        const { name, value } = event.target;
        hooks[name](value);
    } 

    const onSubmit = event => {
        event.preventDefault();
        const date = `${year}-${month}-${day}`;
        const dateMoment = moment(date);
        const outOfRange = dateMoment.isBefore(beginningDateMoment) || dateMoment.isAfter(todayMoment);

        if (outOfRange) setErrorMessage('Date must be between June 16, 1995 and today.');
        else callback(date);
    }

    // component
    return (
        <form onSubmit={onSubmit}>
            <fieldset>
                <legend>Select a date between June 16, 1995 and today.</legend>
                
                {errorMessage && <p><strong>{errorMessage}</strong></p>}

                <div className='input-container'>
                
                    <Month onChange={onChange} value={month} />

                    <RangedSelect
                        name='day'
                        onChange={onChange}
                        range={[1, 31]}
                        renderRangedOptions={renderRangedOptions}
                        value={day}
                    />

                    <RangedSelect
                        name='year'
                        onChange={onChange}
                        range={[1995, currentYear]}
                        renderRangedOptions={renderRangedOptions}
                        value={year}
                    />

                    <input type='submit' value='View' />

                </div>
                
            </fieldset>
        </form>
    );
}