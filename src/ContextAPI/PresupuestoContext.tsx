
// Importaciones 



import { useReducer,createContext, type Dispatch } from "react";
import type { PresupuestoActions,PresupuestoState } from "../Reduce/PreReduce";
import type { ReactNode } from "react";
import { PresupuestoReduce,InitialState } from "../Reduce/PreReduce";

type PresupuestoContextProp = {
    state: PresupuestoState,
    dispatch: Dispatch<PresupuestoActions>
}

type presupuestoChildrenProp = {
    children: ReactNode
}

export const PresupuestoContext = createContext<PresupuestoContextProp>(null!)

export const  PresupuestoChildren = ({children} : presupuestoChildrenProp) => {
    const [state,dispatch] =  useReducer(PresupuestoReduce,InitialState)

    return (
        <PresupuestoContext.Provider
            value={{state,dispatch}}
        >
            {children}
        </PresupuestoContext.Provider>
    )
}
