import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


export const GetData = () => {
    const [pageTitle, setPageTitle] = useState()
    const [pageDate, setPageDate] = useState()
    const [pageURL, setPageURL] = useState()
    const [pageExplanation, setPageExplanation] = useState()
    const [pageMediaType, setPageMediaType] = useState()

    useEffect(() => {

        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(data => {
                console.log(data.data);
                setPageTitle(data.data.title);
                setPageDate(data.data.date);
                setPageURL(data.data.url);
                setPageExplanation(data.data.explanation);
                setPageMediaType(data.data.media_type)
                // console.log(pageData.title)


            })
            .catch(error => {
                console.log('fetch error: ' + error)
            })
    }, [])

    return (
        <div>
            <header>
                <h1>{pageTitle}</h1>
                <p className='date'>Date: {pageDate}</p>
            </header>
            <section>
                <p className='explanation'>{pageExplanation}</p>
                {pageMediaType=== 'video'? <iframe src={pageURL} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowFullScreen></iframe> : <img src={pageURL}></img>
}
                
                {/* <iframe src={pageURL} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowFullScreen></iframe> */}
            </section>
        </div>
    )
}



