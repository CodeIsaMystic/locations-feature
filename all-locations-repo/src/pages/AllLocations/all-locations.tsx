import React, { useEffect, useState } from "react"

import CardLocation from "../../components/card/card-location"

import { LocationCustomer } from "../../api/api"
import { LocationCustomerType } from "../../models/location-customer.interface"

import { Header, PageContainer, Main } from "./all-locations.styles"
import { marginLeft, marginTop } from "../../utils/css"

const AllLocations: React.FC = () => {
  const [locationCustomer, setLocationCustomer] = useState<
    LocationCustomerType[]
  >([])
  const [isError, setIsError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    LocationCustomer.getCards()
      .then((data) => {
        setLocationCustomer(data)
        setIsLoading(false)
      })
      .catch((err) => {
        setIsError(true)
        setIsLoading(false)
      })
    return () => {}
  }, [])

  return (
    <div>
      <PageContainer data-testid="all-locations-component">
        <Header>
          <h2 style={{ marginLeft: marginLeft[60], marginTop: marginTop[20] }}>
            All locations
          </h2>
          <h1
            style={{
              marginLeft: marginLeft[60],
            }}
          >
            Acme locations
          </h1>
        </Header>
        <Main
          style={{
            display: "flex",
            maxWidth: "100%",
            flexWrap: "wrap",
          }}
        >
          <React.Fragment>
            {isLoading && "Loading..."}
            {!isLoading && isError && "There was an error"}
            {!isLoading &&
              !isError &&
              locationCustomer.map((locationCustomer) => (
                <CardLocation
                  key={locationCustomer.id}
                  locationCustomer={locationCustomer}
                />
              ))}
          </React.Fragment>
        </Main>
      </PageContainer>
    </div>
  )
}
export default AllLocations
