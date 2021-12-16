import React from 'react';
import '../App.css'
export const Today = (today) => {



    return (
        <div className="wather-app">
            <div>
                <img className='weather-img' src={require(`../img/animated/${today.today.list[0].weather[0].icon}.svg`).default} alt=" " />
            </div>
            <div>
                <h1>{today.today.city.name}</h1>
                <div style={{ fontSize: 24 }}>
                    <span>{today.today.list[0].weather[0].description}</span>
                    <span style={{ fontSize: 30, fontWeight: 700 }}> {Math.floor(today.today.list[0].main.temp)}°C</span>
                </div>
                <h3>Скорость ветра {today.today.list[0].wind.gust}м/с</h3>
                <h3>Влажность {today.today.list[0].main.humidity}%</h3>
                <h4>Вероятность осадков: <strong>{today.today.list[0].pop * 100}%</strong></h4>
            </div>
            <div>
            </div>
        </div>
    )
}