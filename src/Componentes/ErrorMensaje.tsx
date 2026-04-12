import type { ReactNode } from "react"


type childrenprop = {
    children: ReactNode
}


const ErrorMensaje = ({children} :childrenprop) => {
  return (
    <>
        <p className="p-2.5 bg-red-500 text-white font-bold  text-center">
            {children}
        </p>
    </>
  )
}

export default ErrorMensaje