import React from 'react';
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import moment from 'moment';
import { useHttp } from '../fetchWather';


export const ForADay = ({ forecast, location }) => {

    const { isLoaded, request, error } = useHttp()

    let days = []

    forecast.map((e, i) => {
        if (i === 15 || i === 23 || i === 31 || i === 39) {
            days.push(e)
        }
    })

    const currentDay = (day) => {
        switch (day) {
            case "Sunday":
                return "Воскресенье"
            case "Monday":
                return "Понедельник"
            case "Tuesday":
                return "Вторник"
            case "Wednesday":
                return "Среда"
            case "Thursday":
                return "Четверг"
            case "Friday":
                return "Пятница"
            case "Saturday":
                return "Суббота"
            default:
                return "NaN"


        }
    }


    async function info(day) {




        const result = await request(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&units=metric&exclude=hourly&lang=ru&appid=a65a3f613545bf5b9fac5ec4b39fe7bd`)

        console.log(result);

        Modal.info({
            title: 'This is a notification message',
            content: (
                <div>
                    <p>some messages...some messages...</p>
                    <p>some messages...some messages...</p>
                </div>
            ),
            onOk() { },
        });
    }
    return (
        <div className="forecast">

            {days.map(day => {

                return (

                    <div
                        // onClick={() => info(day)} 
                        key={day.dt_txt}
                    >
                        <div>
                            <h2>{currentDay(moment(day.dt_txt).format("dddd"))}</h2>
                        </div>
                        <div >
                            <img src={require(`../img/animated/${day.weather[0].icon}.svg`).default} alt=" " />
                        </div>
                        <div>
                            <h2><strong> {Math.floor(day.main.temp)}°C</strong></h2>
                            <h3>{day.weather[0].description}</h3>
                            <h4>вероятность<br />осадков: {Math.floor(day.pop  * 100)}%</h4>
                        </div>

                    </div>

                )
            })}


        </div >
    )
}