import { categories } from "../Data/Data"
import { usePrupuesto } from "../Hook/usePresupuesto"

const Filtro = () => {

    const {state,dispatch} = usePrupuesto()
    
    const Handle = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({type: 'Filtrar ',payload: {id: e.target.value}})
    }

  return (
    <div className="text-2xl text-gray-400 font-black text-center mt-10 my-5">
            <form action="">
                <div className="flex flex-col md:flex-row md:items-center gap 5">
                    <label htmlFor="category"> Filtro De Gastos
                        <select id='category' value={state.Filtro} onChange={Handle} className="bg-slate-100 p-3 flex-1 rounded">
                            <option value="">Todas las categorias</option>
                            {categories.map((item)=> (
                                <option value={item.id} key={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
            </form>
    </div>
  )
}

export default Filtro