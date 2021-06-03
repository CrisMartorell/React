import React from 'react'
import Weather from './Weather'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

test("Weather render", async () => {
    //AAA
    // Arrange
    const {findByRole} = render(<Weather temperature={10} />)

    // Act
    const temp = await findByRole("heading")

    // Assert
    expect(temp).toHaveTextContent("10")
})