import React, { Fragment } from 'react';

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export default ({name, onChange, range, renderRangedOptions, value}) => (
    <Fragment>
        <label>{capitalize(name)}
            <select onChange={onChange} name={name} value={value}>
                {renderRangedOptions(range)}
            </select>
        </label>
    </Fragment>
);