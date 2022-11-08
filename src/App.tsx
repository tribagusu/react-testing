import "./App.css"
import { Application } from "./components/application/application"
import { Counter } from "./components/counter/counter"
import { MuiMode } from "./components/mui/mui-mode"
import Skills from "./components/skills/skills"
import { AppProviders } from "./providers/app.providers"

function App() {
  const skills = ["HTML", "CSS", "JavaScript"]

  return (
    <AppProviders>
      <div className="App">
        {/* <Application /> */}
        {/* <Skills skills={skills} /> */}
        {/* <Counter /> */}
        <MuiMode />
      </div>
    </AppProviders>
  )
}

export default App
