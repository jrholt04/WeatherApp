import { useState } from 'react'

function Weather() {
    
    const [serach, setSearch] = useState("")

    return(
        <div className='border-2 border-stone-900 rounded-md p-2 '>


            {/* search */}
          
            <input
                type = "text"
                placeholder='search city'
                onChange={(e) => setSearch(e.target.value)}
                className='mr-5'
            />

            <button className=''>Search</button>

            {/*Temprature */}
            <p>60°</p>

            {/* location */}
            <p>Elizabethtown</p>

            {/* condition */}
            <p>shitty</p>


        </div>
        
    )
}

export default Weather;
