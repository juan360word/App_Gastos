
// Importaciones 

import { useReducer,createContext, type Dispatch, useMemo } from "react";
import type { PresupuestoActions,PresupuestoState } from "../Reduce/PreReduce";
import type { ReactNode } from "react";
import { PresupuestoReduce,InitialState } from "../Reduce/PreReduce";


// Este type se hace para poder llamar a los props del reduce

type PresupuestoContextProp = {
    state: PresupuestoState,
    dispatch: Dispatch<PresupuestoActions>,
    DisponbleGasto: number,
    TotalGasto: number
}


// Este type se realiza para poder usar como prop especial children (obligartoio el ReactNode)

type presupuestoChildrenProp = {
    children: ReactNode
}

// Este export es el qeu se llamara para el useContext

export const PresupuestoContext = createContext<PresupuestoContextProp>(null!)

export const  PresupuestoChildren = ({children} : presupuestoChildrenProp) => {

    const [state,dispatch] =  useReducer(PresupuestoReduce,InitialState)

    // Const del form 
    const TotalGasto = useMemo(() => state.Gastos.reduce((total,gasto) => gasto.monto + total, 0) ,[state.Gastos])
    const DisponbleGasto = state.Presupuesto - TotalGasto

    return (
        <PresupuestoContext.Provider
            value={{state,dispatch,DisponbleGasto,TotalGasto}}
        >
            {children}
        </PresupuestoContext.Provider>
    )
}
