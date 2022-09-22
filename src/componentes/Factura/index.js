import 'boxicons'
import React, { useContext } from 'react'
//import Card from '../../images/img08.jpg'
import { DataContextSend, DataContext} from '../../context/Dataprovider'

export const Factura = () => {
    const valueSend = useContext(DataContextSend)
    const [menuSend, setMenuSend] = valueSend.menuSend
    const value = useContext(DataContext)
    const [carrito] = value.carrito
    const [total] = valueSend.total

    const tooglefalse = () =>{
        setMenuSend(false)
    }

    const show1 = menuSend ? "carritos show" : "carritos";
    const show2 = menuSend ? "carrito show" : "carrito";

    return (
        /*<font color="white">*/
        <div className = {show1}>
            <div className = {show2}>
                <br/><br/><br/><br/>
                <div className = "carrito__close" onClick = {tooglefalse}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    {/* <box-icon type='solid' name='message-square-x'></box-icon> */}
                </div>
                <h2>Su carrito</h2>
                <div className="carrito__center">
                {

                    carrito.length === 0 ? <h2 style = {{
                        textAlign: "center", fontSize: "3rem"
                    }}> Carrito Vacio</h2> : <>
                    {
                    carrito.map((producto)=>(
                    
                    <div className = "carrito__item" key = {producto.id}>
                        <div>
                            <h3>{producto.title}</h3>
                            <p className = "price">${producto.price}</p>
                            <p className = "cantidad">{producto.cantidad}</p>
                        </div>
                        
                    </div>
                    ))
                    
                    }
                    </>
                }
                </div>
                <div className="carrito__footer">
                    <h3>Total: ${total}</h3>
                </div>
            </div>
        </div>
        /*</font>*/
    )
}