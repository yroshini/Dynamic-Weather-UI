import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"London",
        temp:25,
        tempMin:25.09,
        tempMax:25.09,
        humidity:43,
        weather:"Pleasant",   
        feelsLike:16.27,
    });

    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App By Roshini!</h2>
            <SearchBox updateInfo={updateInfo}/>  
            <InfoBox info={weatherInfo}/> 
        </div>
    )
}