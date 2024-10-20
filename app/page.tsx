"use client"

import { useMyStore } from "@/hooks/store"
import { useWasm } from "@/hooks/useWasm"
import { useEffect } from "react"

export default function Page() {
  const bears = useMyStore((state) => state.bears)
  const wasm = useWasm()

  useEffect(() => {
    async function asyncInit() {
      console.log(wasm?.greet("aaa"))
      console.log("bears:" + bears)
    }
    asyncInit()
  }, [wasm, bears])

  return <h1>Hello, Next.js!</h1>
}
