import React from 'react';

import './dashboard.styles.scss';

import WeatherItem from '../weather-item/weather-item.component';

class Dashboard extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            openWeatherKey: 'd3c5928599c5c22e8bc6dd88ca81706d',
            openWeatherAPI: 'api.openweathermap.org/data/2.5/',
            query: '',
            weather: {},
            lastOperation: {}
        };
    }   
    
    // Funcao assincrona desenvolvida para buscar a localizacao do navegador
    getBrowserPosition = () => {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }

    // Funcao utilizando a API do Open Weather com latitude e longitude
    getWeatherByLocation = async (latitude, longitude) => {
        fetch(`//${this.state.openWeatherAPI}weather?lat=${latitude}&lon=${longitude}&appid=${this.state.openWeatherKey}&units=metric&lang=pt_br`)
        .then(res => res.json())
        .then(result => {
            this.setState({
                query: '',
                weather: result,
                lastOperation: { type: 'byLocation' },
                refreshing: false
            });
            console.log(result);
        });
    }

    // Funcao utilizando a API do Open Weather com Query
    getWeatherByQuery = (evt) => {
        if ((evt.key === "Enter") || (evt === "refresh" && evt.key === undefined)){
            fetch(`//${this.state.openWeatherAPI}weather?q=${this.state.query}&appid=${this.state.openWeatherKey}&units=metric&lang=pt_br`)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    weather: result,
                    lastOperation: { 
                        type: 'byQuery',
                        q: this.state.query // Salvando ultima query
                    },
                    query: '',
                    refreshing: false
                });

                console.log(result);
            });
        }
    }

    triggerPositionQuery = () =>{
        this.getBrowserPosition()
            .then((position) => {      
                this.getWeatherByLocation(position.coords.latitude, position.coords.longitude)
        })
        .catch((err) => {
            alert("Ops! Ocorreu um erro ao pesquisar a temperatura da sua localidade atual. Verifique se o seu navegador está habilitado.");
        });
    }

    refreshLastWeather = () =>{
        if (this.state.lastOperation.type === "byLocation"){
            this.setState({
                refreshing: true
            },() => {
                this.triggerPositionQuery();
            });            
        }
        else{
            this.setState({
                refreshing: true,
                query: this.state.lastOperation.q // Recuperando Query antiga
            },() => {
                this.getWeatherByQuery("refresh");
            });
        }
    }

    // Funcao disparada logo apos o React montar o componente
    componentDidMount(){
        this.triggerPositionQuery();
    }

    // Renderizacao do Componente
    render(){
        return (
            // ClassName condicionado baseado na informacao do this.state.weather
            <div className={
                (typeof this.state.weather.main != "undefined") 
                  ? ((this.state.weather.main.temp > 16) 
                    ? 'app warm' 
                    : 'app') 
                  : 'app'
                }
            >          
                <main>
                    {/* Search Box Funcional */}
                    <div className="search-box">
                        <input 
                            type='text'
                            className='search-bar'
                            placeholder='Digite um local e pressione "Enter"...'
                            onChange={e => this.setState({query: e.target.value})}
                            value={this.state.query}
                            onKeyPress={this.getWeatherByQuery}
                        />
                    </div>

                    {/* Function Componente: Weather Item */}
                    {( typeof this.state.weather.main != "undefined") ? (
                        <div className='weather-item-container'>
                            <WeatherItem data={this.state.weather}/>

                            {/* Botão para atualizar temperatura de acordo com última query */}
                            { (this.state.refreshing) ? <p className="refresh-p">Atualizando...</p> 
                            :                             
                            <button 
                                onClick={this.refreshLastWeather}
                                className='refresh-btn'
                            >
                                Atualizar
                            </button>}                            
                        </div>
                    ) : ('')}
                </main>
            </div>
        );
    }
}

export default Dashboard;