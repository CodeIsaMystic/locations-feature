import React from "react"

import AllLocations from "../../pages/AllLocations/all-locations"

import { GlobalStyle } from "../../utils/css/index"

const App: React.FC = () => {
  return (
    <div data-testid="app-container">
      <AllLocations />
      <GlobalStyle />
    </div>
  )
}

export default App
