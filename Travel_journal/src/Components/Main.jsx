import React from "react"
import image from "../assets/location2.png"
export default function Main(props){
    console.log(props)
    return (
        <div className="tavel-list">
             <img src={props.imageUrl} alt="img"  className="image"/>
            <div className="content">
                 <div className="place">
                    <img src={image} alt="loactio logo" className="location-logo" />
                    <p className="locations" ><span>{props.location}</span> <a href={props.googleMapsUrl} className="link">view on google map</a></p>
                 </div>
                 <h1 className="placename">{props.title}</h1>
                 <h4><span className="startdate"></span>{props.endDate}<span className="enddate">{props.startDate}</span></h4>
                 <p className="description">{props.description}</p>
            </div>
        </div>
    )
}