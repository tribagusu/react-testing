/**
 * Greet should render the text hello and if a name is passed into the component It should render hello followed by the name
 */

import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />)
    const textElement = screen.getByText(/Hello/)
    expect(textElement).toBeInTheDocument()
  })

  //   test("renders a name", () => {
  //     render(<Greet name="Bagus" />)
  //     const textElement = screen.getByText("Hello Bagus")
  //     expect(textElement).toBeInTheDocument()
  //   })
})
