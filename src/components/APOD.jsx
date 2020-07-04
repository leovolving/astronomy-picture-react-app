import React, { useEffect, useState } from 'react';
import { DateForm, MediaViewer } from '.';

const API_KEY = process.env.REACT_APP_API_KEY || 'ua9vSa2iPHaEtzmR69B0EnKu7ZfZnemGQkD5nyxR';

export default () => {
    const [date, setDate] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [data, setData] = useState({});

    const onRequestSuccess = res => {
        setErrorMessage(null);
        setData(JSON.parse(res.currentTarget.response));
    }

    useEffect(() => {
        if (date) {
            const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`;
            const xhr = new XMLHttpRequest();
            xhr.addEventListener("load", onRequestSuccess);
            xhr.open('GET', url);
            xhr.send();
        }
    }, [date]);

    return ( 
        <main>
            <section className='card'>
                {date && !errorMessage
                ? <MediaViewer data={data} onClose={setDate} />
                : <DateForm callback={setDate} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />}
            </section>
        </main>
    );
}