import React from 'react';
import Layout from '../components/Layout'
import '../css/App.css';
import CandleContainer from "../components/CandleContainer.js"


const App =()=> {
  return (
    <Layout component={<CandleContainer/>}/>
  );
}

export default App;
