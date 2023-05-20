import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InviteConfirmation from './pages/InviteConfirmation';
import ShowEvents from './pages/ShowEvents';
import {client} from './main.jsx';
import { ApolloProvider } from '@apollo/client';
import HomePage from './pages/home';
import MainPage from './pages/main';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import VenuePage from './pages/venue';
import Cuisine from './pages/cuisine';
import CreatePage from './pages/create';
import InvitePage from './pages/invite';
import GuestList from './pages/guestlist';
import { MyContext } from './MyContext';

function App() {
  const [eventData, setEventData] = useState();


  return (
    <>
    <MyContext.Provider value={{eventData, setEventData}}>
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/rsvp/:eventid/user/:userid" element={<InviteConfirmation />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/show" element={<ShowEvents />} />
            <Route path='/venue' element={<VenuePage />} />
            <Route path='/cuisine' element={<Cuisine />} />
            <Route path='/create' element={<CreatePage />} />
            <Route path='/invite' element={<InvitePage />} />
            <Route path='/guestlist' element={<GuestList />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </MyContext.Provider>
    </>
   
  )
}

export default App


