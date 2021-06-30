import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from './../CityInfo/CityInfo'
import Weather from './../Weather/Weather'

const renderCityAndContry = cityAndCountry => {
    const { city, country} = cityAndCountry

    return (
        <li>
            <CityInfo city= {city} country = {country}/>
            <Weather temperature={10}/>
        </li>
        )
}

const CityList = ({cities}) => {
    return (
        <ul>
            {
                cities.map(cityAndCountry => renderCityAndContry(cityAndCountry))
            }
        </ul>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired  
}

export default CityList