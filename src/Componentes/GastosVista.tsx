
// IMPORTACIONES

import {  useMemo } from "react";
import type { Expense, categoriaData } from "../Types/type";
import { DisplayA } from "./DisplayA";
import { DateEspañol } from "../FechaConfiguracion/Date";
import { categories } from "../Data/Data";
import {
  LeadingActions,
  SwipeAction,
  SwipeableList,
  SwipeableListItem,
  TrailingActions,
  Type,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { usePrupuesto } from "../Hook/usePresupuesto";




 // TYPES 

const categoriaFallback: categoriaData = {

  id: "",
  name: "Sin categoría",
  icon: "gastos",
};

type GastosVistaProps = {
  gasto: Expense;
};

// --------


export const GastosVista = ({ gasto }: GastosVistaProps) => {

   const {dispatch} = usePrupuesto()

  

  const CategoriaInfo = useMemo((): categoriaData => {
    const id = String(gasto.categoria);
    return categories.find((item) => item.id === id) ?? categoriaFallback;
  }, [gasto.categoria]);

  const fechaTexto = useMemo(() => {
    if (!gasto.Fecha) return "Sin fecha";
    const d = gasto.Fecha;
    const iso = d instanceof Date ? d.toISOString() : String(d);
    return DateEspañol(iso);
  }, [gasto.Fecha]);


    const leadingActions = () => (
      <LeadingActions>
        <SwipeAction 
          onClick={() => dispatch({type: 'Actualizar Gasto',payload: {id:gasto.id}})}  
        >
          Actualizar
        </SwipeAction>
      </LeadingActions>
    )

    const trailingActions = () => (
      <TrailingActions>
        <SwipeAction 
          onClick={() => dispatch({type: 'Eliminar gasto',payload: {id: gasto.id}})}
          destructive={true}
        >
          Eliminar
        </SwipeAction>
      </TrailingActions>
    )

  return (
    <>
    <SwipeableList className="max-w-3xl mx-auto mt-6 px-4" type={Type.IOS}>
      <SwipeableListItem
     className="max-w-3xl mx-auto mt-6 px-4"
        maxSwipe={1}
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
  <div className="mt-20 shadow-lg p-10 bg-[#112240] max-w-3xl rounded-3xl mx-auto border-b border-gray-400 flex items-center gap-8">
    
    <div className="shrink-0">
      <img src={`/icono_${CategoriaInfo.icon}.svg`} alt="icon gasto" className="w-20 h-20 object-contain mx-auto" />
    </div>

    <div className="flex-1 space-y-1 mx-auto">
      <p className="text-xl font-bold text-white">{CategoriaInfo.name}</p>
      <p className="text-white text-sm">{gasto.ExpenseMo}</p>
      <p className="text-white text-sm">{fechaTexto}</p>
    </div>

    <div className="shrink-0">
      <DisplayA Monto={gasto.monto} />
    </div>

  </div>
  </SwipeableListItem>
  </SwipeableList>
</>
  )
}
