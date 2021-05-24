import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CityInfo from './CityInfo' //SUT (Subject Under Testing)

test("CityInfo render", async () => {

    const city="Ciudad"
    const country="País"

    //AAA (Arrange, Act, Assert)
    //Arrange
    const {findAllByRole} = render(<CityInfo city={city} country={country}/>)

    //Act
    const cityAndCountryComponents = await findAllByRole("heading")

    //Assert
    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)

})