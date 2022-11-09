import { useState } from 'react'
import { UseCounterProps } from './userCounter.types'

export const useCounter = ({ initialCount = 0 }: UseCounterProps = {}) => {
  const [count, setCount] = useState(initialCount)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount((prev) => Math.max(prev - 1, 0))
  return { count, increment, decrement }
}
