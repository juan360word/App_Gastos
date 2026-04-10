
// Importaciones

import Form from "./Form"
import { usePrupuesto } from "../Hook/usePresupuesto"
import { useMemo } from "react"
import  TackerPresupuesto from "./TackerPresupuesto"
import ExpenseModal from "./CuadroModal"

function Cuadro_Info() {

  const {state} = usePrupuesto()  
  const ValidacionApp = useMemo(() => state.Presupuesto > 0 ,[state.Presupuesto])

  return (
    <>
    <div className=" mx-auto max-w-3xl shadow-xl/24 shadow-black bg-[#393027] rounded-3xl mt-12 p-12">
        {ValidacionApp ? <TackerPresupuesto/> : <Form/>}
    </div>
    {ValidacionApp && (
      <main className="">
        <ExpenseModal/>
      </main>
      
  )}
    
    </>
  )
}

export default Cuadro_Info













