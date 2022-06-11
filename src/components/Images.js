import React from 'react'
import { Fragment } from 'react'
import Header from 'react'
const Images = ({element, url, date}) => {

    if (element!=null){
    return(
        <div>
        <img src={url} alt=""/>    
        <div>
            That's {element} created at {date}
        </div>
    </div>)
    }
}

export default Images