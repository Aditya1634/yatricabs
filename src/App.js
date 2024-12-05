import React from 'react';
import Header from './components/Header/Header';
import SearchBooking from './components/SearchBooking/SearchBooking';
// import InformationPanels from './components/InformationPanels/InformationPanels';
// import CarServiceDetails from './components/CarServiceDetails/CarServiceDetails';
// import OneWayJourney from './components/OneWayJourney/OneWayJourney';
// import IntercityTravel from './components/IntercityTravel/IntercityTravel';
// import Footer from './components/Footer/Footer';
import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <SearchBooking />
      {/* <InformationPanels /> */}
      {/* <CarServiceDetails /> */}
      {/* <OneWayJourney /> */}
      {/* <IntercityTravel /> */}
      {/* <Footer />  */}
    </div>
  );
};

export default App;