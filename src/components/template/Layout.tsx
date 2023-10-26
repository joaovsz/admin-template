import React from 'react'
import { MenuLateral } from './MenuLateral'
import Cabecalho from './Cabecalho'
interface LayoutProps {
    titulo: string
    subtitulo:string
    children?: any
}
const Layout = (props:LayoutProps) => {
  return (
    <div>
        <MenuLateral/>
        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
    </div>
  )
}

export default Layout