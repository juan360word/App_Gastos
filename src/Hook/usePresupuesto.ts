
// Importaciones 

import { PresupuestoContext } from "../ContextAPI/PresupuestoContext";
import { useContext } from "react";


// Re realizo la creacion del propio Hook para llamar usePresupuesto = al useContext


export  const usePrupuesto = () => {
    
    // el Context es el que realizara el llamado de los props 
    // Todo esta en el archivo PresupuestoContext()

    const Context = useContext(PresupuestoContext)

    return (
        Context
    )
}


