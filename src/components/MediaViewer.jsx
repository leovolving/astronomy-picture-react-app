import React, { Fragment } from 'react';

export default ({data, onClose}) => {

    const onClick = () => onClose(null);

    return (
        <Fragment>
            <button onClick={onClick}>Back</button>
            <div>
                <h2>{data.title}</h2>
                {data.media_type === 'image'
                    ? <img style={{width: '100vw'}} src={data.url} alt={'photo of ' + data.title} />
                    : <iframe title={data.title} src={data.url} frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
                }
                <p>{data.explanation}</p>
                <p>&copy; {data.copyright}</p>
            </div>
    </Fragment>
    );
}