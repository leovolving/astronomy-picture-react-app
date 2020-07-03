import React, { useState } from 'react';
import { DateForm, PhotoViewer } from '.';

export default () => {
    const [date, setDate] = useState(null);
    return ( date
        ? <PhotoViewer date={date} onClose={setDate} />
        : <DateForm callback={setDate} />
    );
}