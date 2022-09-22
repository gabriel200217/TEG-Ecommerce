//import { Link } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import { DataContext, DataContextSend } from '../../context/Dataprovider'
//import IMG from '../../images/img01.jpg'

export const ProductoItem = ({
    key,
    id,
    title,
    price,
    image,
    category,
    cantidad,
}) =>{

    const value = useContext(DataContext);
    const valueSend = useContext(DataContextSend);

    const[add,setAdd] = useState()

    const addCarrito = value.addCarrito;
    const addCarritoSend = valueSend.addCarritoSend;

    const addProducts = () =>{
        setAdd(addCarrito(id),addCarritoSend(id))
    }

    return(
        <div className="producto">
            <a href="#">
                <div className="producto__img">
                    <img src={image} alt={title}/>
                </div>
            </a>
            <div className="producto__footer">
                <h1> {title}</h1>
                <p> {category}</p>
                <p className="price">${price}</p>
            </div>
            <div className="buttom">
                <button className="btn" onClick = {() => addProducts(add)}>
                    Añadir al carrito
                </button>
                <div>
                    <a href="#" className="btn">Vista</a>
                </div>
            </div>
        </div>
    )
}

