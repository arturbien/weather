import React from 'react';
import WeatherIcon from './WeatherIcon';

const Day = function(props) {
  return (
    <div className="Day">
    	<p>{props.day}</p>
    	<WeatherIcon weatherIcon={props.weatherIcon} />
    	<h3 className="day-temp">{Math.round(props.dayTemp*10)/10}</h3>
    	<h4 className="night-temp">{Math.round(props.nightTemp*10)/10}</h4>
    </div>
  );
}

export default Day;
