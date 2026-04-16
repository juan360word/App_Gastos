
// Importaciones 


import { useEffect, useMemo } from "react"
import { usePrupuesto } from "../Hook/usePresupuesto"
import { GastosVista } from "./GastosVista"



export const ListaExponse = () => {
    const {state} = usePrupuesto()
    
    const gastosFiltrados = useMemo(
      () =>
        state.Filtro
          ? state.Gastos.filter((item) => item.categoria === state.Filtro)
          : state.Gastos,
      [state.Gastos, state.Filtro]
    )

    const MuestraValidad = useMemo(() => state.isDefinido && gastosFiltrados.length === 0 ,[gastosFiltrados,state.isDefinido])

      useEffect(() => {
        localStorage.setItem('Presupuesto', state.Gastos.toString())
        localStorage.setItem('Expense', JSON.stringify(state.Gastos))
      },[state])
  return (
    <>
    
    <div className="mt-10">
    {!state.isDefinido ? null : MuestraValidad ? (
        <p className="text-2xl text-[#C9956B] text-center font-black">No se tiene gastos</p>
    ) : (
        <>
            <p className="text-2xl text-[#C9956B] font-black text-center mt-10 my-5">Listado de Gastos</p>
            {gastosFiltrados.map((item) => (
                <GastosVista key={item.id} gasto={item} />
            ))}
        </>
    )}
</div>
    </>
  )
}
