export default function Display({ input }) {
  return (
    <div className="calc-display">
      {input || "0"}
    </div>
  )
}