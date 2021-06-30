import React from 'react'
import Weather from './Weather'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

test("Weather render", async () => {
    //AAA
    // Arrange
    const {findByRole} = render(<Weather temperature={10} state="sunny"/>)

    // Act
    const temp = await findByRole("heading")

    // Assert
    expect(temp).toHaveTextContent("10")
})

