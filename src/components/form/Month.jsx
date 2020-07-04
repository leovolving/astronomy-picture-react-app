import React, { Fragment } from 'react';

const months = [
    {text: 'January', value: '01'},
    {text: 'February', value: '02'},
    {text: 'March', value: '03'},
    {text: 'April', value: '04'},
    {text: 'May', value: '05'},
    {text: 'June', value: '06'},
    {text: 'July', value: '07'},
    {text: 'August', value: '08'},
    {text: 'September', value: '09'},
    {text: 'October', value: '10'},
    {text: 'November', value: '11'},
    {text: 'December', value: '12'}
]

const renderMonthOption = month => (
    <option key={month.value}  value={month.value}>
        {month.text}
    </option>
);

export default ({onChange, value}) => (
    <Fragment>
        <label>Month
            <select onChange={onChange} name='month' value={value}>
                {months.map(renderMonthOption)}
            </select>
        </label>
    </Fragment>
);