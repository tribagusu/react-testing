import { render, screen } from "@testing-library/react"
import { rest } from "msw"
import { Users } from "./users"
import { server } from "../../mocks/server"

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />)
    const textElement = screen.getByText("Users")
    expect(textElement).toBeInTheDocument()
  })

  test("renders a list of users", async () => {
    render(<Users />)
    const users = await screen.findAllByRole("listitem")
    expect(users).toHaveLength(3)
  })

  test("render error", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500))
        }
      )
    )
    render(<Users />)
    const error = await screen.findByText("error fetching users")
    expect(error).toBeInTheDocument()
  })
})
