import React from 'react';

const api = {
  key: 'd3c5928599c5c22e8bc6dd88ca81706d',
  base: 'http://api.openweathermap.org/data/2.5/'
}

function App() {

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
    <div className='app'>
      <main>
        {/* Search Section */}
        <div className='search-box'>
          <input 
            type='text'
            className='search-bar'
            placeholder='Pesquisar local...'
          />
        </div>

        {/* Location Section */}
        <div>
          <div className='location-box'>
            <div className='location'>Paraibuna, SP</div>
            <div className='date'>{ dateBuilder(new Date()) }</div>
          </div>
        </div>

        {/* Weather Section */}
        <div className='weather-box'>
          <div className='temp'>
            22° C
          </div>
          <div className='weather'>Ensolarado</div>
        </div>
      </main>
    </div>
  );
}

export default App;
