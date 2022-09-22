import 'boxicons'
import React, { useContext } from 'react'
//import Card from '../../images/img08.jpg'
import { DataContext, DataContextSend} from '../../context/Dataprovider'

export const Carrito = () => {

    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu
    const [carrito, setCarrito] = value.carrito
    const [total] = value.total

    const valueSend = useContext(DataContextSend)
    const [menuSend, setMenuSend] = valueSend.menuSend
    // const [carritoSend] = valueSend.carritoSend

    const tooglefalse = () =>{
        setMenu(false)
    }

    const toogleMenuSend = () => {
        setMenuSend(!menuSend)
    }

    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    const resta = id =>{
        carrito.forEach(item =>{
            if(item.id === id){
                item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1;
            }
            setCarrito([...carrito])
        })
    }

    const suma = id =>{
        carrito.forEach(item =>{
            if(item.id === id){
                item.cantidad += 1;
            }
            setCarrito([...carrito])
        })
    }

    const removeProducto = id =>{
        if(window.confirm("¿Quieres quitar el producto?")){
            carrito.forEach((item, index) =>{

                if(item.id === id){

                
                item.cantidad = 1;
                carrito.splice(index, 1)
                }
            })
        }
        setCarrito([...carrito])
    }

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
                        <img src = {producto.image} alt = ""/>
                        <div>
                            <h3>{producto.title}</h3>
                            <p className = "price">${producto.price}</p>
                        </div>
                         <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16" onClick = {() => suma(producto.id)}>
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <p className = "cantidad">{producto.cantidad}</p>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16" onClick = {() => resta(producto.id)}>
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                            </div>
                        <div className = "remove__item" onClick = {() =>removeProducto(producto.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                            
                        </div>
                    </div>
                    ))
                }
                
                </>
                }
                </div>

                    {/* {carritoSend.length} */}
                    <div className="carrito__footer" onClick={toogleMenuSend}>
                        <h3>Total: ${total}</h3>
                        <button className="btn">Payment</button>
                    </div>
            </div>
        </div>
        /*</font>*/
    )
}