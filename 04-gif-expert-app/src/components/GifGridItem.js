import React from 'react'
import PropTypes from 'prop-types'

export default function GifGridItem({title,url}) {
    return (
        <div className='card animate__animated animate__bouncex'>
            <img src={url} alt={title} ></img>
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes={
    title: PropTypes.string.isRequired,
    url:   PropTypes.string.isRequired
}
