
// Importaciones 


import { useMemo } from "react"
import { usePrupuesto } from "../Hook/usePresupuesto"
import { GastosVista } from "./GastosVista"



export const ListaExponse = () => {
    const {state} = usePrupuesto()

    const MuestraValidad = useMemo(() => state.Gastos.length === 0 ,[state.Gastos])

  return (
    <>
    
    <div className="mt-10">
        {MuestraValidad ? <p className="text-2xl text-gray-400 text-center font-black">No se tiene gastos</p> :(
            <>
            <p className="text-2xl text-gray-400 font-black text-center mt-10 my-5">Listado de Gastos</p>
            {state.Gastos.map((item) => (
                <GastosVista  key={item.id} gasto={item} />
            ))}
            </>
        )}
    </div>
    </>
  )
}
