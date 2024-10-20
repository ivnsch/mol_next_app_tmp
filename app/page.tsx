"use client"

import { AppContext } from "@/context/AppContext"
// import { Deps } from "@/context/AppContext";
import { WASMContext } from "@/context/WASMContext"
import { useMyStore } from "@/hooks/store"
import { useContext, useEffect } from "react"

export default function Page() {
  //   const { wasm } = useContext(WASMContext);
  const { deps } = useContext(AppContext)
  const bears = useMyStore((state) => state.bears)

  useEffect(() => {
    async function asyncInit() {
      if (deps && deps.wasm) {
        console.log("will call greet..")
        console.log(deps.wasm.greet("aaa"))
        console.log("called greet..")
        console.log("bears:" + bears)
      }
    }
    asyncInit()
  }, [deps])

  return <h1>Hello, Next.js!</h1>
}
