import React from 'react';
import WeatherIcon from './WeatherIcon';

const Today = function(props) {
  return (
    <section className='Today shadow'>
      <div className='main'>
        <div className='degrees'>
          <h1>{Math.floor(props.temp*10)/10}&deg;C</h1>
        </div>
        <div className='symbol'>
          <WeatherIcon weatherIcon={props.weatherIcon} />
        </div>
      </div>
      <div className='details'>
        <ul>
          <li>{props.city+', '+props.country}</li>
          <li>{props.weatherType}</li>
          <li>Wind: {props.wind} mph</li>
          <li>Humidity {props.humidity}%</li>
        </ul>
      </div>
    </section>
  );
}

export default Today;