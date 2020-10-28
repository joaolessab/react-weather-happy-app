import React from 'react';

import './weather-item.styles.scss';

// Funcao para retornar data atual formatada
const dateBuilder = (d) => {
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    let days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} de ${month} de ${year}`
};

// Funcao retornando o componente
const WeatherItem = ({data}) => (
    <div className='weather-item'>
        <div className='location-box'>
            <div className='location'>{data.name}, {data.sys.country}</div>
            <div className='date'>{ dateBuilder(new Date()) }</div>
        </div>

        <div className='weather-box'>
            <div className='temp'>
                {Math.round(data.main.temp)}°c
            </div>
            <div className='weather'>
              {data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}
            </div>
        </div>
    </div>
);

export default WeatherItem;