import React from 'react';


export const GifGridItem = ( {id, title, image} ) => {
    console.log( image )
    return(
        <div className="card animate__animated animate__fadeIn">
            <img src={ image } alt={title} />
            <p>{title}</p>
        </div>
    )
}