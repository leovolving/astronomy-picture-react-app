import React, { Fragment } from 'react';

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export default ({name, onChange, range, renderRangedOptions, value}) => (
    <Fragment>
        <label htmlFor={name}>{capitalize(name)}</label>
        <select onChange={onChange} id={name} name={name} value={value}>
            {renderRangedOptions(range)}
        </select>
    </Fragment>
);