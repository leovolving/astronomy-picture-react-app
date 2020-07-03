import React, { Fragment, useState, useEffect } from 'react';

const API_KEY = process.env.API_KEY || 'DEMO_KEY';

export default ({date, onClose}) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();

    const onClick = () => onClose(null);

    const onRequestSuccess = res => {
        setData(JSON.parse(res.currentTarget.response));
        setLoading(false);
    }

    useEffect(() => {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`;
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("load", onRequestSuccess);
        xhr.open('GET', url);
        xhr.send();
    }, [date]);

    return (
        <Fragment>
            <button onClick={onClick}>Back</button>
            {!isLoading && (
                <div>
                    <h2>{data.title}</h2>
                    <img src={data.url} alt={'photo of ' + data.title} />
                    <p>{data.description}</p>
                    <p>&copy; {data.copyright}</p>
                </div>
            )}
        </Fragment>
    );
}