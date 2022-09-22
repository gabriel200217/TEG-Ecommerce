import React from 'react'
//import { Link } from 'react-router-dom';
import Portada from "../../images/inicio.jpg";

export const Inicio = () =>{
    return(
        <div className="inicio">
           <a href='/'>
             <h1>Inicio</h1>
           </a>
           <a href='/productos'>
             <h1>Productos</h1>
           </a>
           <a href='/UseGet'>
             <h1>Listado</h1>
           </a>
           <img src={Portada} alt="inicio"/>
        </div>
    )
}