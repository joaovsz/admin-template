import React from 'react'
interface TituloProps{
    titulo: string
    subtitulo: string
}
export const Titulo = (props:TituloProps) => {
  return (
    <div>
        <h1 className={``}>
            {props.titulo}
        </h1>
        <h2>{props.subtitulo}</h2>
    </div>
  )
}
