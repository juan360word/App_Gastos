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

    useEffect(()=> {
        if(state.Editar){
            const EditarGasto = state.Gastos.filter(item => item.id === state.Editar)[0]
            SetGastos(EditarGasto)
        }
      
      },[state.Editar])

    const [Gastos, SetGastos] = useState<DateplusExpense>({
        monto: 0,
        ExpenseMo: "",
        categoria: "",
        Fecha: new Date(),
    });

      

    const {dispatch} = usePrupuesto()
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
        
        // Aca se agreagara un nuevo Gasto
        dispatch({type: 'ValorAgregado',payload: {Presupuesto: Gastos}})
        
        // Reiniciar 
        SetGastos({
            monto: 0,
            ExpenseMo: "",
            categoria: "",
            Fecha: new Date(),
        })
        
        

     
   }

    return (
        <>
            <form className=" space-y-5" onSubmit={handleEnvio }>
                <legend className=" text-center text-3xl font-black py-2">
                    Nuevo gasto
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
                        value={Gastos.monto === 0 ? "" : String(Gastos.monto)}
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

                <div className="flex flex-col gap-2.5">
                    <label htmlFor="FechaModal" className="text-xl">
                        Fecha De Los Gastos
                    </label>
                    <DatePicker
                        onChange={HandleChangeFecha}
                        value={Gastos.Fecha}
                        className=" bg-slate-100  flex justify-center "
                    />
                </div>

                <input
                    type="submit"
                    className="w-full bg-blue-500 p-2 my-3 text-2xl text-white font-bold cursor-pointer rounded-xl"
                    value="Ingresar Nuevo Gasto"
                />
            </form>
        </>
    );
};
