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
        })
        fetch(`${api.forecastBase}forecast?q=${search}&appid=${api.key}&units=imperial`)
            .then(res => res.json())
            .then((result) => {
                setForecast(result)
                console.log(result)
            })
    }

    const resetSearch = () => {
        setForecast([])
        setWeather([])
    }

    return(
        <div className='border-2 border-stone-900 rounded-md p-2 bg-gradient-to-r from-stone-400 to-blue-500'>


            {/* search */}
          
            <input
                type = "text"
                placeholder='search city...'
                onChange={(e) => setSearch(e.target.value)}
                className='mr-5 bg-gradient-to-r from-stone-400 to-blue-500 border-2 border-white rounded-md p-2 text-white placeholder-white'
            />

            <button id='submitButton' onClick={searchPressed} className='border-2 border-white rounded-md p-2 text-white'>Search</button>

            <button id='resetButton' onClick={resetSearch} className='border-2 border-white rounded-md p-2 text-white mx-2'>Reset</button>

            {typeof weather.main != "undefined" ? (
             <div className='text-white'>
               
                {/*Temprature */}
                <p className='flex justify-center'>Now</p>
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
                
             </div>
            ):(
            ""
            )}
            <br></br>
            
            {/* daily forecast */}
            <div className='p-2'>
             {typeof forecast.list != 'undefined' ? ( 
             <div className='flex flex-row'>
                {forecast.list.map((item , index) => (
                 
                    index % 8 == 0  ? (
                        <div key={index} className="flex flex-col p-5 text-white">
                            <p className='flex justify-center border-2 border-white rounded-md '>{new Date(item.dt * 1000).toLocaleString([], { year: '2-digit', month: '2-digit', day: '2-digit' })}</p>
                            <p className='flex justify-center'>Low: {item.main.temp_min}°F</p>
                            <p className='flex justify-center'>High: {item.main.temp_max}°F</p>
                            <img
                                src={`${iconUrlBase}${item.weather[0].icon}@2x.png`}
                                alt={item.weather[0].description}
                                className='mx-auto'
                            />
                            <p className='flex justify-center'>{item.weather[0].description}</p>
                            <br></br>
                        </div>
                    ) : 
                    
                    null
                 
                ))}

            </div>
            
            ) : ( 
            ""
            )}

           </div>           
        </div>
        

        
        
    )
}

export default Weather;
