import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";


// icons--------
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){

    const INIT_URL="https://images.unsplash.com/photo-1734536314871-40de62976e1d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL="https://services.meteored.com/img/article/a-temperatura-mais-alta-10-de-julho-de-1913-264091-1_1280.jpg";
    const COLD_URL="https://th.bing.com/th/id/OIP.debaDUCrSwMCZ-r2rP42BQHaE7?rs=1&pid=ImgDetMain";
    const RAIN_URL="https://th.bing.com/th/id/R.d5a8d86d7e7bf61599e3611c1e88f51a?rik=rjGaLUAaqtA4CQ&riu=http%3a%2f%2fmedia-cache-ec0.pinimg.com%2foriginals%2fdf%2f51%2f80%2fdf51804a05fe7d9ce61fb868f5e759d7.jpg&ehk=yNcFB6Y2q2iPmRjDWoBfzIVkTLB%2f8CZnUahby6GXZuQ%3d&risl=&pid=ImgRaw&r=0";

    return(
        <div className="InfoBox">
            {/* <h1>Weather Info</h1> */}
            <div className='cardContainer'>     
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity>80?
                        RAIN_URL
                        :info.temp>15
                        ?HOT_URL
                        :COLD_URL
                    }
                    title="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}{
                        info.humidity>80?
                        <ThunderstormIcon/>
                        :info.temp>15
                        ?<WbSunnyIcon/>
                        :<AcUnitIcon/>
                    }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature - {info.temp}&deg;C</p>
                        <p>Humidity - {info.humidity}</p>
                        <p>Min Temp - {info.tempMin}</p>
                        <p>Max Temp - {info.tempMax}</p>
                        <p>
                            The weather can be described as <i>{info.weather}</i>  and feels like <i>{info.feelsLike}&deg;C</i>
                        </p>
                    </Typography>
                    </CardContent>
                </Card>
            </div>
       </div>
    )
}