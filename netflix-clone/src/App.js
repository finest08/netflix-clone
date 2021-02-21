import React from 'react';
import './App.css';
import Row from './Row';
import requests from './Requests';
import Banner from './Banner';
import Nav from './Nav';


function App() {
  return (
    <div className="app">
      
      <Nav />
      
      <Banner />
      
      <Row title="NETFLIX ORIGINALS" 
       fetchUrl={requests.fetchNetflixOriginals}
       isLargeRow={true}
       />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovie}/>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

    
    </div>
  );
}

export default App;
