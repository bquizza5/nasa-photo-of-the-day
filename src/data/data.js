import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import { Header, Segment } from 'semantic-ui-react'
import styled from 'styled-components';


const Image = styled.img`
    width: 60%;
    height: 100%;
    max-height: 600px;
    min-width: 360px;
    margin: auto;
    margin-top: 40px;

`;

const Explanation = styled.p`
    width: 90%;
    margin: auto;
    margin-top: 40px;
`;



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

        <Segment inverted>
            <header >
                <Header as='h1' inverted color='red'>
                    {pageTitle}
                </Header>
                <Header as='p' inverted color='blue'>Date: {pageDate}</Header>
            </header>
            <section>
                <Explanation className='explanation'>{pageExplanation}</Explanation>
                {pageMediaType === 'video' ? <iframe src={pageURL} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowFullScreen></iframe> : <Image src={pageURL}></Image>}
            </section>
        </Segment>

    )
}



