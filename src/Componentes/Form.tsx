
// Importaciones

import { useMemo, useState } from "react"
import { usePrupuesto } from "../Hook/usePresupuesto"


function Form() {
    const [Presupuesto, SetPresupuesto ] = useState(0)
    const {dispatch} = usePrupuesto()

    const HandleChase = (e: React.ChangeEvent<HTMLInputElement>)  => {
        const Decimal = e.target.value.replace(/\D/g, "")
        SetPresupuesto(e.target.valueAsNumber),
        SetPresupuesto(Number(Decimal))
    } 

    const Validacion = useMemo(() =>  {
             return  isNaN(Presupuesto) || Presupuesto <= 0 
            },[Presupuesto]) 

    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('MUESTRA de que sirve')
        dispatch({type: 'Agregar' ,payload :{Presupuesto}})
    }

  return (
    <>
    <form action="" className="space-y-5" onSubmit={HandleSubmit}>
        <div className="flex flex-col space-y-5 ">
            <label htmlFor="Gurned" className="text-center text-4xl text-white tracking-widest font-bold ">Definicion Del Presupuesto</label>
            <input type="number" className="max-w-5xl p-2 m-5 border rounded-xl  border-white bg-white mx-auto" 
                placeholder="Ingresa tu Dinero"
                name="Gurned"
                value={Presupuesto.toLocaleString("es-CO")}
                onChange={HandleChase}
            />
        </div>
        <input type="submit" disabled={Validacion} value={'Definicion Del Dinero'} className="w-full border bg-white p-2 tracking-widest font-black cursor-pointer disabled:opacity-30  " />
    </form>
    </>
  )
}

export default Form