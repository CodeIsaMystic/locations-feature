import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import App from "../App"

describe("App main component basic test suite", () => {
  it("should render the App component", () => {
    render(<App />)

    const divContainerElement = screen.getByTestId("app-container")
    expect(divContainerElement).toBeInTheDocument
  })
})
