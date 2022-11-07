import { render, screen } from "@testing-library/react"
import { Application } from "./application"

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />)

    const pageHeading = screen.getByRole("heading", {
      level: 1,
      name: "Job application form",
    })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
      name: "Section 1",
    })
    expect(sectionHeading).toBeInTheDocument()

    //# with Regex
    const paragraphElement = screen.getByText(/mandatory/i)
    expect(paragraphElement).toBeInTheDocument()

    const closeElement = screen.getByTitle("close")
    expect(closeElement).toBeInTheDocument()

    //# with Function
    const imageElement = screen.getByAltText((content) =>
      content.startsWith("a person")
    )
    expect(imageElement).toBeInTheDocument()

    const customElement = screen.getByTestId("custom-element")
    expect(customElement).toBeInTheDocument()

    //# by Role
    // const nameElement = screen.getByRole("textbox", {
    //   name: "Name",
    // })
    // expect(nameElement).toBeInTheDocument()

    //# by LabelText with Selector
    const nameElement2 = screen.getByLabelText("Name", {
      selector: "input",
    })
    expect(nameElement2).toBeInTheDocument()

    const nameElement3 = screen.getByPlaceholderText("Fullname")
    expect(nameElement3).toBeInTheDocument()

    const nameElement4 = screen.getByDisplayValue("Bagus")
    expect(nameElement4).toBeInTheDocument()

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    })
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole("combobox")
    expect(jobLocationElement).toBeInTheDocument()

    //# by Role
    // const termsElement = screen.getByRole("checkbox")
    // expect(termsElement).toBeInTheDocument()

    //# by LabelText
    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    )
    expect(termsElement2).toBeInTheDocument()

    const submitButtonElement = screen.getByRole("button")
    expect(submitButtonElement).toBeInTheDocument()
  })
})
