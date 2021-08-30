import axios, { AxiosResponse } from "axios"
import { LocationCustomerType } from "../models/location-customer.interface"

const instance = axios.create({
  baseURL: "https://6033c4d8843b15001793194e.mockapi.io/api/",
  timeout: 15000,
})

const responseBody = (response: AxiosResponse) => response.data

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
}

export const LocationCustomer = {
  getCards: (): Promise<LocationCustomerType[]> => requests.get("locations"),
  getACard: (id: number): Promise<LocationCustomerType> =>
    requests.get(`locations${id}`),
}
