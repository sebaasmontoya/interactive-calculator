import { useState } from 'react'
import Display from './components/Display'
import ButtonGrid from './components/ButtonGrid'
import './App.css'

const MAX_LENGTH = 20
const isOperator = (c) => ["+", "-", "*", "/"].includes(c)

function evaluate(expression) {
  if (/\/0(?!\d)/.test(expression)) return "Error: ÷ by 0"

  try {
    const result = Function(`"use strict"; return (${expression})`)()
    if (!isFinite(result)) return "Error: ÷ by 0"
    if (isNaN(result)) return "Error"
    return parseFloat(result.toFixed(10)).toString()
  } catch {
    return "Error"
  }
}

function App() {
  const[input, setInput] = useState("")

  const handleButton = (value) => {

    //After an error, only allow starting fresh
    if(input.startsWith("Error")) {
      if (!isOperator(value) && value !== "=") setInput(value)
        return
    }

    if (value === "=") {
      if(!input) return
      setInput(evaluate(input))
      return
    }

    const lastChar = input.slice(-1)

    //Replace last operator instead of stacking
    if(isOperator(value) && isOperator(lastChar)) {
      setInput((prev) => prev.slice(0,-1) + value)
      return
    }

    //Block leading operator (except minus for negatives)
    if(!input && isOperator(value) && value !== "-") return

    //Block multiple decimals in the same number segment
    if (value === ".") {
      const segments = input.split(/[+\-*/]/)
      if (segments.at(-1).includes(".")) return
    }

    //Block multiple leading zeros
    if (value === "0" && input === "0") return

    if (input.length >= MAX_LENGTH) return

    setInput((prev) => prev + value)
  }

  const handleClear = () => setInput("")

  const handleErase = () => {
    setInput((prev) => {
      if (prev.length <= 1 || prev.startsWith("Error")) return ""
      return prev.slice(0,-1)
    })
  }

  return (
    <div className='calc-container'>
      <Display input={input} />
      <ButtonGrid 
        onButtonClick={handleButton} 
        onClear={handleClear}
        onErase={handleErase}
      />
    </div>
  )
}

export default App
