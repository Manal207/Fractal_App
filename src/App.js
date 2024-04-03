import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import VideoFeed from './Components/VideoFeed';
import PhoneNumberForm from './Components/PhoneNumberForm';
import VerificationPhoneNumber from './Components/VerificationPhoneNumber';
import EventDetailsMobile from './Components/EventDetailsMobile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<VideoFeed/>}/>
        <Route path='/phone' element={<PhoneNumberForm/>}/>
        <Route path='/phoneVerification' element={<VerificationPhoneNumber/>}/>
        <Route path='/EventDetailsMobile' element={<EventDetailsMobile/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;

