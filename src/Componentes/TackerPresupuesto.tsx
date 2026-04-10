import { DisplayA } from "./DisplayA"


function TackerPresupuesto() {
  return (
    <>
    <div className="grid grid-cols-1  md:grid-cols-2 gap-5  ">
        <div className="flex justify-center">
            <img src="/grafico.jpg" alt="GraficosGastos" />
        </div>
        <div className="flex flex-col justify-center  items-center  gap-8">
                <button className=" rounded-3xl bg-white w-full p-2 cursor-pointer font-black ">
                    Reiniciar App
                </button>

               <DisplayA label='Presupuesto' Monto={400} />
                <DisplayA label='Disponible' Monto={200}/>
                <DisplayA label='Gastado' Monto={150}/>  
        </div>

       
    </div>
    </>
  )
}

export default TackerPresupuesto