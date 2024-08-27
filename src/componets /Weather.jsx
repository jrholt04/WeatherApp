import { useState } from 'react'

const api = {
    key: '067a44209a1fd252e069a387d0446015',
    base: 'https://api.openweathermap.org/data/2.5/', 
    forecastBase: 'https://api.openweathermap.org/data/2.5/'
}

const iconUrlBase = 'https://openweathermap.org/img/wn/'

function Weather() {
    
    const [search, setSearch] = useState("")
    const [weather, setWeather] = useState({})
    const [forecast, setForecast] = useState({}) 

    const searchPressed = () => {
       fetch(`${api.base}weather?q=${search}&appid=${api.key}&units=imperial`)
        .then(res => res.json())
        .then((result) => {
            setWeather(result)
            console.log(result)
        })
        fetch(`${api.forecastBase}weather?q=${search}&appid=${api.key}`)
            .then(res => res.json())
            .then((result) => {
                setForecast(result)
                console.log(result)
            })
    }

    return(
        <div className='border-2 border-stone-900 rounded-md p-2 bg-amber-500'>


            {/* search */}
          
            <input
                type = "text"
                placeholder='search city'
                onChange={(e) => setSearch(e.target.value)}
                className='mr-5 bg-amber-500 border-2 border-stone-900 rounded-md p-2'
            />

            <button onClick={searchPressed} className='border-2 border-stone-900 rounded-md p-2'>Search</button>

            {typeof weather.main != "undefined" ? (
             <div className=''>
               
                {/*Temprature */}
                <p className='flex justify-center'>{weather.main.temp}°F</p>
                
                <img
                    src = {`${iconUrlBase}${weather.weather[0].icon}@2x.png`}
                    alt={weather.weather[0].main}
                    className='mx-auto'
                />
                
                {/* location */}
                <p className='flex justify-center'>{weather.name}</p>
    
                {/* condition */}
                <p className='flex justify-center'>{weather.weather[0].description}</p>
                
                <div>
                    {/*hourly forecast */}
                    <p></p>

                </div>
             </div>
            ):(
            ""
            )}

           

        </div>
       
        
    )
}

export default Weather;
