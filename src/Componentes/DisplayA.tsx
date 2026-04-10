
// Importaciones

type  DisplayAProp = {
    label: string,
    Monto:number
}

export const DisplayA = ({label,Monto} : DisplayAProp) => {
  return (
    <>
        <p className="text-2xl  font-black text-white">
            {label}: {''}
            <span className="text-white text-2xl">
                ${Monto}
            </span>
        </p>
    </>
  )
}
