import React from "react";

export default function Cards(props) {
    return (
        <div className="container--cards">
            <img src={props.data.imageUrl} alt='picture' />
            <div className='container--info'>
                <div className="container--row">
                    <p>{props.data.location}</p>
                    <a href={props.data.googleMapsUrl}>View in Google Maps</a>
                </div>
                <div className="container--MainContent">
                    <h1>{props.data.title}</h1>
                    <h5>{props.data.startDate} - {props.data.endDate}</h5>
                    <h5>{props.data.description}</h5>
                </div>
            </div>
        </div>
    )
}