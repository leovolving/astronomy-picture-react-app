import React, { useState } from 'react';
import { Month, RangedSelect } from './form';

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

export default ({callback}) => {
    // setup state
    const today = new Date();
    const currentYear = today.getFullYear();
    const [year, setYear] = useState(currentYear);
    const [month, setMonth] = useState(to2DigitString(today.getMonth()));
    const [day, setDay] = useState(to2DigitString(today.getDate()));

    // callbacks
    const onChange = (event) => {
        const hooks = {
            year: setYear,
            month: setMonth,
            day: setDay
        }
        const { name, value } = event.target;
        hooks[name](value);
    } 

    const onSubmit = () => {
        callback(`${year}-${month}-${day}`);
    }

    // component
    return (
        <form onSubmit={onSubmit}>
            <fieldset>
                <legend>Select a date between June 16, 1995 and today.</legend>
                
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
                
            </fieldset>
        </form>
    );
}