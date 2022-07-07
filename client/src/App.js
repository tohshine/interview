import {startTransition, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {GetMetrics} from './action/metrics'
import {GetTime} from './action/time'

function App({GetMetrics,GetTime,metrics,time}) {

 useEffect(()=>{
GetMetrics()
GetTime()
 },[])
  return (
    <div className="App">
      <h1>Server Time</h1>
      <p>{time.properties&&time.properties.epoch.type}</p>
    </div>
  );
}

const mapStateToProps = (state) => {

  return { metrics: state.metrics, time: state.GetTime };
};

export default connect(mapStateToProps,{GetMetrics,GetTime})(App);
