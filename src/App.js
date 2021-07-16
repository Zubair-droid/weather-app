import React, {Component} from 'react';
import './App.css';
import Clock from 'react-live-clock';

 
class App extends Component {
  
  state = {
    city : 'Salem',
    temp : '30 C'
  };
 
  componentDidMount(){
    fetch('http://api.openweathermap.org/data/2.5/weather?units=metric&q=salem&appid=1453df0c40f8c3d9a099cf3dbda36c08')
    .then((res) => res.json())
    .then((data) => {
      this.setState(
        {city: data.name, temp: data.main.temp})
    })
  }
  
  render(){
  return (
    
    <div className = "content">
       <h2 className = "m-auto text-center hero-text"> Check the current weather of your city! </h2>
      <div className="card h-75 main-div mx-auto bg-img text-white ">
        <div className="card-body">
          <h5 className="card-title fs-2">{this.state.city}</h5>
           <h6 className = "text-muted"> IN</h6>
          
          
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
           <h3 className = "time-text">
           <Clock className = "fs-4"  format={'HH:mm:ss'} ticking={true} timezone={'IN/Pacific'} />
           {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
           </h3>
          <h5  class="temp-text fs-4">{this.state.temp}°C</h5>
        </div>
      </div>
    
    </div>


    
   );
  }
}
export default App;
