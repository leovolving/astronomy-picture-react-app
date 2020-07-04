import React, { Fragment } from 'react';

export default ({data, onClose}) => {

    const onClick = () => onClose(null);

    return (
        <Fragment>
            <button onClick={onClick}>Back</button>
            <div>
                <h2>{data.title}</h2>
                {data.media_type === 'image'
                    ? <img src={data.url} alt={'photo of ' + data.title} />
                    : <p>Media is a video (not an image). Feature coming soon! Go back and try another date to view an image</p>
                }
                <p>{data.description}</p>
                <p>&copy; {data.copyright}</p>
            </div>
    </Fragment>
    );
}