import React, { Component } from 'react';
import Day from './Day';

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {data:null};
    this.apiKey = this.props.apiKey;
  }

  componentDidMount() {
    this.getWeatherData(this.props.city);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.city !== this.props.city) {
      this.getWeatherData(nextProps.city);
    }
  }
  
  getWeatherData(city) {
    fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&units=metric&APPID='+this.apiKey)
    .then(result=>result.json())
    .then(items=>{ this.setState({data: items}) });
  }

  render() {
    if (this.state.data) {
      let days = [];
      for (let i = 0; i < this.state.data.list.length; i++) {
        let date = new Date(this.state.data.list[i].dt*1000);
        let dayOfWeek= date.toString().split(' ')[0];
        days.push(
          <Day 
            key={i}
            day={dayOfWeek} 
            dayTemp={this.state.data.list[i].temp.day} 
            nightTemp={this.state.data.list[i].temp.night}
            weatherIcon={this.state.data.list[i].weather[0].icon} />
        )
      }
      return (
        <section className='Forecast shadow'>
          {days}
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Forecast;


