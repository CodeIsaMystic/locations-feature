import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import AllLocations from "../all-locations"

describe("All Locations page component basic test suite", () => {
  it("should render the AllLocations `id` on PageContainer", () => {
    render(<AllLocations />)

    const divContainerElement = screen.getByTestId("all-locations-component")
    expect(divContainerElement).toBeInTheDocument
  })
})
