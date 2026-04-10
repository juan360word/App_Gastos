import { categories } from "../Data/Data"
import DatePicker from 'react-date-picker';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];



export const ModalForm = () => {
  return (
    <>
        <form  className=" space-y-5">
            <legend className=" text-center text-3xl font-black py-2">
                Nuevo gasto
            </legend>
            <div className="flex flex-col gap-2.5">
                <label htmlFor="ExpenseModal" className="text-xl">
                    Nombre Gasto
                </label>
                <input type="text"  id=" ExpenseModal" placeholder="Agregar Nombre" className=" p-2 bg-slate-100"/>
            </div>
            <div className="flex flex-col gap-2.5">
                <label htmlFor="CantidadModal" className="text-xl">
                   Cantidad
                </label>
                <input type="text"  id="CantidadModal" placeholder="Agregar Cantidad" className=" p-2 bg-slate-100"/>
            </div>
            <div className="flex flex-col gap-2.5">
                <label htmlFor="CategoriaModal" className="text-xl">
                   Categoria
                </label>
                <select   id="CategoriaModal" className=" p-2 bg-slate-100">
                    <option >Seleccione</option>
                        
                        {categories.map(e =>(
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    
                </select>
            </div>

            <div className="flex flex-col gap-2.5">
                <label htmlFor="CantidadModal" className="text-xl">
                   Fecha De Los Gastos
                </label>
                <DatePicker value='' className=' bg-slate-100  flex justify-center '/>
            </div>

          <input type="submit" className="w-full bg-blue-500 p-2 my-3 text-2xl text-white font-bold cursor-pointer rounded-xl" value='Ingresar Nuevo Gasto' /> 
        </form>
    </>
  )
}
