import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
// import './WeatherApp'
export default function SearchBox({updateInfo}){

    let [city,setCity]=useState("");
    let [error,setError]=useState("");

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="efa9752867fd24a989ea2016d2208735";    

    let getWeatherInfo=async()=>{
        let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        //console.log(jsonResponse);
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    }    

    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }

    let handleSubmit=async (evt)=>{
        evt.preventDefault();
        console.log(city);
        let newinfo= await getWeatherInfo();
        updateInfo(newinfo);
        setCity("");
    }
    return(
        <div className='SearchBox'>
            {/* <h3>Search the city for Weather</h3> */}
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="Enter City" variant="outlined" value={city} onChange={handleChange} required  />
            <br /><br />
            <Button variant='contained' type='submit' color='success'>Search</Button>
            </form>            
        </div>
    )

}