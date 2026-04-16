
// importaciones

import { categories } from "../Data/Data";
import DatePicker from "react-date-picker";
import type { Value } from "react-date-picker/dist/shared/types.js";
import "react-calendar/dist/Calendar.css";
import "react-date-picker/dist/DatePicker.css";
import { useEffect, useState } from "react";
import type { DateplusExpense } from "../Types/type";
import ErrorMensaje from "./ErrorMensaje";
import { usePrupuesto } from "../Hook/usePresupuesto";





export const ModalForm = () => {
    const {state} = usePrupuesto()
    const [PreMonto,SetMonto] = useState(0)


    useEffect(()=> {
        if(state.Editar){
            const EditarGasto = state.Gastos.filter(item => item.id === state.Editar)[0]
            SetGastos(EditarGasto)
            SetMonto(EditarGasto.monto)
        }
      
      },[state.Editar])


      

      


    const [Gastos, SetGastos] = useState<DateplusExpense>({
        monto: 0,
        ExpenseMo: "",
        categoria: "",
        Fecha: new Date(),

    });

   

    const {dispatch,DisponbleGasto} = usePrupuesto()
    const [Error,SetError] = useState('')

    const HandleChangeFecha = (value: Value) => {
        const fecha = Array.isArray(value) ? value[0] : value;
        SetGastos((prev) => ({ ...prev, Fecha: fecha }))
    };

   const  handleEnvio = (e : React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(Object.values(Gastos).includes('')){
            SetError('Todos los campos son obligatorios')
            return
        }
        
        if((Gastos.monto - PreMonto) > DisponbleGasto){
            SetError('Se sale del presupuesto...')
            return
        }

        // Aca se agreagara un nuevo Gasto o Se Actualizara

        if(state.Editar){
            dispatch({type: 'Actualizacion Lista',payload: {Expense: {id: state.Editar,...Gastos}}})
      }else{
        dispatch({type: 'ValorAgregado',payload: {Presupuesto: Gastos}})
      }
        

        // Reiniciar 
        SetGastos({
            monto: 0,
            ExpenseMo: "",
            categoria: "",
            Fecha: new Date(),
        })

        SetMonto(0) 
   }

    return (
        <>
            <form className=" space-y-5" onSubmit={handleEnvio }>
                <legend className=" text-center text-3xl font-black py-2">
                  {state.Editar ? 'Editar Cambios' : 'Nuevo gasto'}
                </legend>
                 {Error && <ErrorMensaje>{Error}</ErrorMensaje>}
                <div className="flex flex-col gap-2.5">
                    <label htmlFor="ExpenseModal" className="text-xl">
                        Nombre Gasto
                    </label>
                   
                    <input
                        type="text"
                        value={Gastos.ExpenseMo}
                        onChange={(e) =>
                            SetGastos((prev) => ({
                                ...prev,
                                ExpenseMo: e.target.value,
                            }))
                        }
                        id="ExpenseModal"
                        placeholder="Agregar Nombre"
                        className=" p-2 bg-slate-100"
                    
                    />
                </div>
                <div className="flex flex-col gap-2.5">
                    <label htmlFor="CantidadModal" className="text-xl">
                        Cantidad
                    </label>
                    <input
                        type="text"
                        value={Gastos.monto === 0 ? "" : Gastos.monto.toLocaleString('es-CO')}
                        onChange={(e) => {
                            const raw = e.target.value.replace(/\D/g, "");
                            SetGastos((prev) => ({
                                ...prev,
                                monto: raw === "" ? 0 : Number(raw),
                                
                                
                            }));
                        }}
                        id="CantidadModal"
                        placeholder="Agregar Cantidad"
                        className=" p-2 bg-slate-100"
                        

                    />
                </div>
                <div className="flex flex-col gap-2.5">
                    <label htmlFor="CategoriaModal" className="text-xl">
                        Categoria
                    </label>
                    <select
                        value={Gastos.categoria}
                        onChange={(e) =>
                            SetGastos((prev) => ({
                                ...prev,
                                categoria: e.target.value,
                            }))
                        }
                        id="CategoriaModal"
                        className=" p-2 bg-slate-100"
                    >
                        <option value="">Seleccione</option>
                        {categories.map((e) => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col gap-2.5 relative">
                    <label htmlFor="FechaModal" className="text-xl">
                        Fecha De Los Gastos
                    </label>
                    <DatePicker
                        onChange={HandleChangeFecha}
                        value={Gastos.Fecha}
                        className=" bg-slate-100  flex justify-center absolute z-50 "
                    />
                </div>

                <input
                    type="submit"
                    className="w-full bg-blue-500 p-2 my-3 text-2xl text-white font-bold cursor-pointer rounded-xl"
                    value={state.Editar ? 'Editar Cambios' : 'Registrar Gastos'}
                />
            </form>
        </>
    );
};
