

export function DateEspañol(Dates:string) : string {
    const date_ob = new Date(Dates)
    const config : Intl.DateTimeFormatOptions = {
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric'
    }
    return new Intl.DateTimeFormat('es-ES', config).format(date_ob)
}