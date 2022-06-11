import React from 'react'
import { Fragment } from 'react'
import Header from 'react'
const Images = ({element, url, date}) => {



let year = date.slice(0,4);
let month = date.slice(5,7);
let day = date.slice(8,10)

let newDate = day + "/" + month + "/" + year;


if (element!=null){
    return(
        <div className='wrapper'>
            
            <img src={url} alt=""/>    
            
            <div className='description'>
                <div>
                    <p className='nick'> {element}   </p>
                    <p className='super'>  on</p>
                    <p>{newDate}</p>
                </div>
            </div>
        </div>)
    }
}

export default Images