
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
        
        dispatch({type: 'Agregar' ,payload :{Presupuesto}})
    }

   

  return (
    <>
    <form action="" className="space-y-5" onSubmit={HandleSubmit}>
        <div className="flex flex-col space-y-5 ">
            <label htmlFor="Gurned" className="text-center text-4xl text-[#C9956B] tracking-widest font-bold ">¿Cuánto tienes?</label>
            <input type="number" className="max-w-5xl p-2 m-5 border rounded-xl text-[#F0F4FF] border-[#E8B89A] bg-[#112240] mx-auto" 
                placeholder="Ingresa tu Dinero"
                name="Gurned"
                value={Presupuesto.toLocaleString("es-CO")}
                onChange={HandleChase}
            />
        </div>
        <input type="submit" disabled={Validacion} value={'Comenzar'} className="w-full  bg-white  hover:bg-[#A87550] hover:text-white p-2 tracking-widest  rounded-lg font-black cursor-pointer disabled:opacity-30  " />
    </form>
    </>
  )
}

export default Form