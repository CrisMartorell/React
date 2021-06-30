import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CityList from './CityList'

test("CityListRender", async() => {
    
    const cities = [
        {city: "Berlín", country:"Alemania"},
        {city: "Lyon", country:"Francia"},
        {city: "Manchester", country:"Reino Unido"},
        {city: "Venecia", country:"Italia"},
        {city: "Málaga", country:"España"}
    ]


    const {findAllByRole} = render(<CityList cities={cities}/>)

    const items = await findAllByRole("listitem")

    expect(items).toHaveLength(5)
})