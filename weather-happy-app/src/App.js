import React, { useState } from 'react';

const api = {
  key: 'd3c5928599c5c22e8bc6dd88ca81706d',
  base: 'http://api.openweathermap.org/data/2.5/'
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setQuery('');
        setWeather(result);
        console.log(result);
      });
    }
  }

  const dateBuilder = (d) => {
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    let days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  };

  return (
    <div className={
      (typeof weather.main != "undefined") 
        ? ((weather.main.temp > 16) 
          ? 'app warm' 
          : 'app') 
        : 'app'}>
      
      <main>
        {/* Search Section */}
        <div className='search-box'>
          <input 
            type='text'
            className='search-bar'
            placeholder='Pesquisar local...'
            onChange = {e => setQuery(e.target.value)}
            value = {query}
            onKeyPress = {search}
          />
        </div>
      {( typeof weather.main != "undefined") ? (
        <div>
          {/* Location Section */}
          <div>
            <div className='location-box'>
              <div className='location'>{weather.name}, {weather.sys.country}</div>
              <div className='date'>{ dateBuilder(new Date()) }</div>
            </div>
          </div>

          {/* Weather Section */}
          <div className='weather-box'>
            <div className='temp'>
              {Math.round(weather.main.temp)}°c
            </div>
            <div className='weather'>{weather.weather[0].main}</div>
          </div>
        </div>
      ) : ('')}
      </main>
    </div>
  );
}

export default App;
