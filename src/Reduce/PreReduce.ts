// Importaciones

import { v4 as uuidv4 } from "uuid";
import type { Expense } from "../Types/type";
import type { DateplusExpense } from "../Types/type";


const createGasto = (item: DateplusExpense): Expense => {
    return {
        ...item,
        id: uuidv4()
        
    }
}

export type PresupuestoActions = 
    
    {type : 'Agregar', payload : {Presupuesto : number}} |
    {type : 'CuadroModal'} |
    {type : 'Cerrar-Modal'} | 
    {type : 'ValorAgregado',payload:{Presupuesto :DateplusExpense}} |
    {type : 'Eliminar gasto',payload:{id: Expense['id']}} |
    {type : 'Actualizar Gasto',payload:{id: Expense['id']}}


export type PresupuestoState = {
    Presupuesto : number
    Modal:boolean
    Gastos: Expense[]
    Editar: Expense['id']
}



export const InitialState : PresupuestoState =  {
    Presupuesto : 0,
    Modal:false,
    Gastos: [],
    Editar: ''
}

export const PresupuestoReduce = (
    state : PresupuestoState =  InitialState,
    actions : PresupuestoActions

    ) => {

    if(actions.type === 'Agregar'){
            return {
                ...state,
                Presupuesto: actions.payload.Presupuesto
            }
    }
    if(actions.type === 'CuadroModal'){
        return {
            ...state,
            Modal:true
        }
        
    }

    if(actions.type === 'Cerrar-Modal') {
        return {
            ...state,
            Modal: false
        }
    }
    if (actions.type === "ValorAgregado") {
        const nuevoGasto = createGasto(actions.payload.Presupuesto);
        return {
            ...state,
            Gastos: [...state.Gastos, nuevoGasto],
            Modal: false
            
            
            
        };
        
    }

    if(actions.type === 'Eliminar gasto'){
        return{
            ...state,
            gastos: state.Gastos.filter(gasto => gasto.id !==  actions.payload.id)
        }
    }

    if(actions.type === 'Actualizar Gasto'){
        return{
            ...state,
            Editar: actions.payload.id ,
            Modal:true
        }
    }
    
    

    return state
}

