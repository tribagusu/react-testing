import { useState } from "react"
import { SkillProps } from "./skills.types"

const Skills = (props: SkillProps) => {
  const { skills } = props
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  )
}

export default Skills
