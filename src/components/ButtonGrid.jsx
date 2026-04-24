import Button from "./Button"

const BUTTONS = [
  ["7", "8", "9", "/"],
  ["4", "5", "6", "*"],
  ["1", "2", "3", "-"],
  ["0", ".", "=", "+"],
]

const getType = (btn) => {
  if (btn === "=") return "equal"
  if (["+", "-", "*", "/"].includes(btn)) return "op"
  return ""
}

export default function ButtonGrid({ onButtonClick, onClear, onErase }) {
  return (
    <>
      <div className="calc-erase">
        <button className="btn clear" onClick={onClear}>C</button>
        <button className="btn clear" onClick={onErase}>⌫</button>
      </div>
      <div className="calc-grid">
        {BUTTONS.flat().map((btn, i) => (
          <Button
            key={i}
            label={btn}
            type={getType(btn)}
            onClick={onButtonClick}
          />
        ))}
      </div>
    </>
  )
}