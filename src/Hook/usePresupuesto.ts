
// Importaciones 

import { PresupuestoContext } from "../ContextAPI/PresupuestoContext";
import { useContext } from "react";


export  const usePrupuesto = () => {

    const Context = useContext(PresupuestoContext)

    return (
        Context
    )
}


