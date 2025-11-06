import React from 'react'
import Home from './Sections/Home.jsx';
import Abouts from './Sections/Abouts.jsx';
import Service from './Sections/Service.jsx';
import Price from './Sections/Price.jsx';
import Test from './Sections/Test.jsx';
import Footer from './Sections/Footer.jsx';
import Contact from './Sections/Contact.jsx';
const App = () => {
  return (
    <>
    <div className='overflow-hidden'>
      <div id='home'><Home /></div>
      <div id='Abouts'><Abouts /></div>
      <div id='Service'><Service /></div>
      <div id='Price'><Price /></div>
    <div id='Test'><Test /></div>
    <div id='Contact'><Contact /></div>
    <div id='Footer'><Footer /></div>
    </div>
    </>
  )
}
export default App