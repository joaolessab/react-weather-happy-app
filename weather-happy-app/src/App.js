import React from 'react';

const api = {
  key: 'd3c5928599c5c22e8bc6dd88ca81706d',
  base: 'http://api.openweathermap.org/data/2.5/'
}

function App() {
  return (
    <div className='app'>
      <main>
        <div className='search-box'>
          <input 
            type='text'
            className='search-bar'
            placeholder='Pesquisar local...'
          />
        </div>
      </main>
    </div>
  );
}

export default App;
