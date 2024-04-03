import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UpIcon from '../Icons/Up.svg'
import DownIcon from '../Icons/Down.svg'

const ScrollPage = ({ event, goToNextEvent, goToPreviousEvent }) => {

  const navigate= useNavigate();

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  // The minimum distance (in pixels) the touch needs to travel to be considered a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // Reset touch end to null every time a new touch starts
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    // Swipe right (previous event)
    if (isRightSwipe) {
      goToPreviousEvent();
    }

    // Swipe left (next event)
    if (isLeftSwipe) {
      goToNextEvent();
    }
  };

  const onClick=()=>{
    navigate('/EventDetailsMobile', { state: { event } });
  }


React.useEffect(() => {
  const video = document.querySelector('video');

  if (video) {
    video.play().catch(error => console.error("Video play failed.", error));
  }
}, []);

  return (
    <div className='scrollPage'>
      <div className='videoFrame' 
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}>
        {/* <img src={event.imageUrl} alt={event.name} style={{ width: '100%'}} /> */}
        <video 
          src={event.video} 
          alt={event.name} 
          style={{ width: '100%', height: 'auto' }} 
          playsInline
          muted
          loop
          controls
        />
        <div className='video-content'>
          <h1>{event.name}</h1>
          <p>Join us for an unforgettable night at Pita Pit</p>
          <p onClick={onClick}>See more</p>

        </div>
      </div>
      <div className='up-and-down-icons'>
        <img src={UpIcon} alt="Up" onClick={goToPreviousEvent}/>
        <img src={DownIcon} alt="Down" onClick={goToNextEvent}/>
      </div>
    </div>
  )
}

export default ScrollPage
