


export type PresupuestoActions = 
    
    {type : 'Agregar', payload : {Presupuesto : number}} |
    {type : 'CuadroModal'} |
    {type : 'Cerrar-Modal'}


export type PresupuestoState = {
    Presupuesto : number
    Modal:boolean
}



export const InitialState : PresupuestoState =  {
    Presupuesto : 0,
    Modal:false
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

    if(actions.type = 'Cerrar-Modal') {
        return {
            ...state,
            Modal: false
        }
    }


    return state
}

