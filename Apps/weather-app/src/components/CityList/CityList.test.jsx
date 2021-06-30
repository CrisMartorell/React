import React from 'react'
import {render, fireEvent} from '@testing-library/react'
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

test("CityList click on item", async() => {
    const cities = [
        {city: "Berlín", country:"Alemania"},
        {city: "Lyon", country:"Francia"},
        {city: "Manchester", country:"Reino Unido"},
        {city: "Venecia", country:"Italia"},
        {city: "Málaga", country:"España"}
    ]
    // Simular onclick sobre item (mock)
    const fnClickOnItem = jest.fn()

    const {findAllByRole} = render(<CityList cities={cities} onClickCity={fnClickOnItem}/>)

    const items = await findAllByRole("listitem")

    //uso de fireEvent para ejecutar evento, se llamará al primer item
    fireEvent.click(items[0])

    // Y se esperará a que sólo se llame 1 vez
    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})