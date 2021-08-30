import { rest } from "msw"

export const handlers = [
  rest.get(
    "https://6033c4d8843b15001793194e.mockapi.io/api/locations",
    (req, res, ctx) => {
      return res(
        ctx.json([
          { id: "14", name: "Sydneeland" },
          { id: "15", name: "Carterbury" },
        ])
      )
    }
  ),
]
