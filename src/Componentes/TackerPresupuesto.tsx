
// Importaciones
import { usePrupuesto } from "../Hook/usePresupuesto"
import { DisplayA } from "./DisplayA"
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'


function TackerPresupuesto() {

  const {state,TotalGasto,DisponbleGasto,dispatch} = usePrupuesto()

    const porcentaje = +((TotalGasto / state.Presupuesto) * 100).toFixed(2)
 


  return (
    <>
    <div className="grid grid-cols-1  md:grid-cols-2 gap-5  ">
        <div className="flex justify-center">
            <CircularProgressbar
              value={porcentaje}
              styles={buildStyles({
                pathColor: porcentaje === 100 ? '' : '' ,
                trailColor: '',
                textSize: 8,
                textColor: porcentaje === 100 ? '' : ''
              })}
              text={`${ porcentaje} % gastado`}
            />
        </div>
        <div className="flex flex-col justify-center  items-center  gap-8">
                <button onClick={() =>  dispatch({type: 'Reiniciar'})} className=" rounded-3xl bg-white w-full p-2 cursor-pointer font-black ">
                    Reiniciar App
                </button>

               <DisplayA label='Presupuesto' Monto={state.Presupuesto} />
                <DisplayA label='Disponible' Monto={DisponbleGasto}/>
                <DisplayA label='Gastado' Monto={TotalGasto}/>  
        </div>

       
    </div>
    </>
  )
}

export default TackerPresupuesto