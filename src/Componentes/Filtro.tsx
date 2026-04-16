import { categories } from "../Data/Data"
import { usePrupuesto } from "../Hook/usePresupuesto"

const Filtro = () => {

    const {state,dispatch} = usePrupuesto()
    
    const Handle = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({type: 'Filtrar ',payload: {id: e.target.value}})
    }

  return (
    <div className="text-2xl text-[#C9956B] font-black text-center mt-10 my-5">
            <form action="">
                <div className="">
                    <label htmlFor="category"> Filtro De Gastos
                        <select id='category' value={state.Filtro} onChange={Handle} className="  p-3 flex-1 rounded">
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