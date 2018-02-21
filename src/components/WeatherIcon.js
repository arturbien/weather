import React from 'react';

const WeatherIcon = function(props) {
  return (
  	<div className='WeatherIcon'>
  		<img  src={require('../icons/'+props.weatherIcon+'.svg')} alt='weather symbol' />
  	</div>
  );
}

export default WeatherIcon;

