import React from 'react'
import CityList from './CityList'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    {city: "Berlín", country:"Alemania"},
    {city: "Lyon", country:"Francia"},
    {city: "Quito", country:"Ecuador"},
    {city: "Venecia", country:"Italia"},
    {city: "Málaga", country:"España"}
]

export const CityLitExample = () => <CityList cities={cities}/>