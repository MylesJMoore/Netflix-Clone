import React from 'react';
import Row from './Row';
import requests from './requests'; // You'll create this next
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Netflix Clone</h1>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    </div>
  );
}

export default App;
