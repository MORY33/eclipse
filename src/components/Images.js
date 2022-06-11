import React from 'react'
import { Fragment } from 'react'
import Header from 'react'
const Images = ({element, url, date}) => {

// const dateTime = `${date.getDate()} + ${date.getFullYear()}`;
// console.log(`${date.getDate()}`) 

let year = date.slice(0,4);
let month = date.slice(5,7);
let day = date.slice(8,10)
// console.log(day);
// console.log(year);
// console.log(month);
let newDate = day + "/" + month + "/" + year;
// console.log(newDate);


if (element!=null){
    return(
        <div className='wrapper'>
            
            <img src={url} alt=""/>    
            
            <div className='description'>
                <div>
                    <p className='nick'> {element}   </p>
                    <p className='super'>  on</p>
                    {/* <p> {date.slice(0,10)}</p> */}
                    <p>{newDate}</p>
                </div>
            </div>
        </div>)
    }
}

export default Images