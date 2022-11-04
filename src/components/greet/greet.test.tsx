import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

test("Greet renders correctly", () => {
  render(<Greet />) // get virtual dom / component
  const textElement = screen.getByText(/hello/i) // get the unit that want to be tested
  expect(textElement).toBeInTheDocument() // compare to the expected result
})
