import React, { Fragment } from 'react';

const getDimensions = () => {
    const width = document.getElementsByClassName('card')[0].offsetWidth - 30;
    console.log("document.getElementsByClassName('card')[0]", document.getElementsByClassName('card')[0])
    const height = width / (16/9);
    return { height, width };
}

export default ({data, onClose}) => {

    const onClick = () => onClose(null);
    const isImage = data.media_type === 'image'
    const {height, width} = getDimensions();
    console.log('he, wid', height, width)

    return (
        <Fragment>
            <button onClick={onClick}>Back</button>
            <div>
                <h2>{data.title}</h2>
                {isImage
                    ? <img style={{width: '100vw'}} src={data.url} alt={'photo of ' + data.title} />
                    : <iframe title={data.title} src={data.url} frameBorder="0" height={height} width={width} allow="encrypted-media" allowFullScreen></iframe>
                }
                <p>{data.explanation}</p>
                {data.copyright && <p>&copy; {data.copyright}</p>}
            </div>
    </Fragment>
    );
}