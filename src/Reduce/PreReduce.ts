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
    {type : 'Actualizar Gasto',payload:{id: Expense['id']}} |
    {type : 'Actualizacion Lista',payload: {Expense: Expense}} |
    {type : 'Reiniciar'} |
    {type : 'Filtrar ',payload: {id: Expense['id']}}


export type PresupuestoState = {
    Presupuesto : number
    Modal:boolean
    Gastos: Expense[]
    Editar: Expense['id']
    isDefinido: boolean 
    Filtro: Expense['id']
}

const Guardar = ()  : number => {
    const LocalStorage = localStorage.getItem('Presupuesto')
    return LocalStorage ? +LocalStorage : 0
}

const GuardarGastos = ()  : Expense[] => {
    const LocalStorageExpenses = localStorage.getItem('Expense')
    return LocalStorageExpenses ? JSON.parse(LocalStorageExpenses) : []
}


export const InitialState : PresupuestoState =  {
    Presupuesto : Guardar(),
    Modal:false,
    Gastos: GuardarGastos(),
    Editar: '',
    isDefinido: Guardar() > 0,
    Filtro: ''
}

export const PresupuestoReduce = (
    state : PresupuestoState =  InitialState,
    actions : PresupuestoActions

    ) => {

    if(actions.type === 'Agregar'){
            return {
                ...state,
                Presupuesto: actions.payload.Presupuesto,
                isDefinido: true 
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
            Modal: false   ,
            Editar: ''
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


    if(actions.type === 'Reiniciar'){
        return {
            ...state,
            Presupuesto : 0,
            Gastos: [],
          
        }
    }



    if(actions.type === 'Eliminar gasto'){
        return{
            ...state,
            Gastos: state.Gastos.filter(gasto => gasto.id !==  actions.payload.id)
        }
    }

    if(actions.type === 'Actualizar Gasto'){
        return{
            ...state,
            Editar: actions.payload.id ,
            Modal:true
        }
    }
    
    if(actions.type === 'Actualizacion Lista'){
        return {
            ...state,
            Gastos: state.Gastos.map((gasto) =>
                gasto.id === actions.payload.Expense.id ? actions.payload.Expense : gasto
            ),
            Modal:false,
            Editar: ''
        }
    }
    
    if(actions.type === 'Filtrar '){
        return {
            ...state,
            Filtro: actions.payload.id
        }
    }

    return state
}

