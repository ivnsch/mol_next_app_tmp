"use client"

import React, { createContext, ReactNode, useContext, useEffect } from "react"
import { WASMContext } from "./WASMContext"

const initial: IAppContext = {}

export const AppContext = createContext(initial)

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const { wasm } = useContext(WASMContext)
  useEffect(() => {
    async function asyncInit() {
      if (wasm) {
        // await wasm.initLog();
      }
    }
    asyncInit()
  }, [wasm])

  const deps = {
    wasm: wasm,
  }
  return (
    <AppContext.Provider value={{ deps: deps }}>{children}</AppContext.Provider>
  )
}

interface IAppContext {
  // optional just for ts, which needs a default state
  // this is set synchronously so we expect it to be always set
  // TODO better solution?
  deps?: Deps
}

export interface Deps {
  wasm: Wasm
}

// export type Wasm = typeof import("../wasm/mol");
export type Wasm = typeof import("../wasm/wasmhello")

interface AppContextProviderProps {
  children: ReactNode
}
