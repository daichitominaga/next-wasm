import { useContext } from "react"
import { WASMContext } from "../context/WASM"

export const WASMExample = () => {
  const ctx = useContext(WASMContext)

  if (!ctx.wasm) {
    return <>...</>
  }

  return (
    <>
      Computed from WASM:
      <div>4+3={ctx.wasm.add(4,3)}</div>
      <div>4-3={ctx.wasm.minus(4,3)}</div>
    </>
  )
}
