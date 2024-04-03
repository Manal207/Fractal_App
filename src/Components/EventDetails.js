import React from 'react'
import locationIcon from '../Icons/Vector.svg'
import dateIcon from '../Icons/date.svg'
import timeIcon from '../Icons/time.svg'
import peopleIcon from '../Icons/peoplee.svg'
import GoogleMapReact from 'google-map-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const Marker = ({ lat, lng }) => {
  const handleClick = () => {
    // Construct the Google Maps URL for directions
    const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${lat},${lng}`;
    // Open the URL in a new tab
    window.open(googleMapsDirectionsUrl, '_blank');
  };

  return (
    <div className='icon-and-text' onClick={handleClick} style={{
      cursor: 'pointer',
    }}>
      
      <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" /><div className='openItenary'>Open Iternary</div>
    </div>
  );
};



const EventDetails = ({event}) => {

  const Location = {
    center: {
      lat: event.lat,
      lng: event.lng
    },
    zoom: 11
  };

  

  return (
    <div className="eventDetails">
      <h1>{event.name}</h1>
      <div className="eventInfo">
        <div className="infoBlock">
          <div className='iconAndText'><img src={locationIcon} alt="Location" /><p>{event.location}</p></div>
          <div className='iconAndText'><img src={peopleIcon} alt="people" /><p>{event.participants} participants</p></div>
        </div>
        <div className="infoBlock">
          <div className='iconAndText'><img src={dateIcon} alt="date" /><p>{event.date}</p></div>
          <div className='iconAndText'><img src={timeIcon} alt="time" /><p>{event.time}</p></div>
        </div>
      </div>
      <button className="inviteButton">Invite your friend & get a 10% discount</button>
      <div className="aboutSection">
        <h2>About</h2>
        <p>{event.description}</p>
      </div>
      <div className="locationSection">
        <h2>Location</h2>
        <div className='iconAndText'><img src={locationIcon} alt="Location" /><p>{event.location}</p></div>
        <div className='map' style={{ height: '250px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCu0lPeaEsHIvgXA8Tbzo0I-3PIQT-MdHM' }} // Replace with your Google Maps API key
            defaultCenter={Location.center}
            defaultZoom={Location.zoom}
          > 
            <Marker
              lat={event.lat}
              lng={event.lng}
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  )
}

export default EventDetails

