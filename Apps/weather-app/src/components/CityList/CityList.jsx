import React from 'react'
import PropTypes from 'prop-types'
import CityInfor from './../CityInfo/CityInfo'

const renderCityAndContry = cityAndCountry => {
    const { city, country} = cityAndCountry

    return <CityInfo city= {city} country = {{country}}/>
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
