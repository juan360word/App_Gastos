
// Importaciones

export type  DisplayAProp = {
    label?: string,
    Monto:number
}

export const DisplayA = ({label,Monto = 0} : DisplayAProp) => {
  const formatted = Monto.toLocaleString('es-CO')
  return (
    <>
        <p  className="text-2xl mx-auto  font-black text-white">
            {label ? <span className=" text-[#C9956B] mx-auto  text-2xl" >{label}  {''}: </span> : null}
            <span className=" text-white mx-auto text-2xl" >
                ${formatted}
            </span>
        </p>
    </>
  )
}
