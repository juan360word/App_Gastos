


export type PresupuestoActions = 
    
    {type : 'Agregar', payload : {Presupuesto : number}}


export type PresupuestoState = {
    Presupuesto : number
}



export const InitialState : PresupuestoState =  {
    Presupuesto : 0
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

    return state
}

