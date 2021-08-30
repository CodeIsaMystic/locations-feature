import { useState } from "react"

export const useCounter = () => {
  const initialState = 0
  const [count, setCount] = useState<number>(initialState)
  const increment = () => setCount((counter: number) => counter + 1)

  return {
    count,
    increment,
  }
}
