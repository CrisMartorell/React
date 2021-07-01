import React from 'react'
import {render} from '@testing-library/react'
import ForecastItem from './ForecastItem'

test('ForecastItem render ', async() => {
    const {findByText} = render(
                            <ForecastItem weekDay="Lunes" hour={13} state="cloud" temperature={18}/>
                        )

    const weekDay = await findByText(/Lunes/)
    const hour = await findByText(/13/)
    const temperature = await findByText(/18/)

    expect(weekDay).toHaveTextContent("Lunes")
    expect(hour).toHaveTextContent("13")
    expect(temperature).toHaveTextContent("18°C")
})
