import React, { createContext, useEffect, useState } from 'react';
import { firebaseBuscar } from '../componentes/utils/FirebaseUtils.js';
//import Data from '../Data.js';
export const DataContext = createContext()
export const DataContextSend = createContext()

export const DataProvider = (props) =>{
    const[productos, setProductos] = useState([]);
    const[menu, setMenu] = useState(false);
    const[menuSend, setMenuSend] = useState(false);
    //const[carrito,setCarrito] = useState([]);
    const[total,setTotal] = useState(0);

    useEffect(() => {
        buscarProductos();
      }, []);
    
      const buscarProductos = async () => {
        let resultado = await firebaseBuscar('Productos');
        setProductos(resultado);
      }

    /*useEffect(() =>{
       const producto = Data.items
        if(producto){
            setProductos(producto)
        }
        else
        {
            setProductos([])
        }
    }, [])*/

    const addCarrito = (id) =>{
        const check = carrito.every(item =>{
            return item.id !== id;
        })
        if(check){
            const data = productos.filter(producto => {
                return producto.id === id
            })
            setCarrito([...carrito, ...data])
        }else{
            alert("El producto ya se encuentra")
        }
    }

    const[carrito,setCarrito] = useState( () =>{
        const datCarrito = localStorage.getItem('dataCarrito');
        const dataCarrito = JSON.parse(datCarrito);
        return dataCarrito;
    });

    useEffect(()=>{
        localStorage.setItem('dataCarrito', JSON.stringify(carrito));
    }, [carrito]);
    
    const addCarritoSend = (id) =>{
        const check = carritoSend.every(item =>{
            return item.id !== id;
        })
        if(check){
            const data = productos.filter(producto => {
                return producto.id === id
            })
            setCarritoSend([...carritoSend, ...data])
        }else{
            alert("El producto ya se encuentra")
        }
    }

    const[carritoSend,setCarritoSend] = useState( () =>{
        const datCarritoSend = localStorage.getItem('dataCarritoSend');
        const dataCarritoSend = JSON.parse(datCarritoSend);
        return dataCarritoSend;
    });

    useEffect(()=>{
        localStorage.setItem('dataCarritoSend', JSON.stringify(carritoSend));
    }, [carritoSend]);


    useEffect(() =>{
        const getTotal = () =>{
            const res = carrito.reduce((prev, item) => {
                return prev + (item.price * item.cantidad);
                
            }, 0)
            setTotal(res)
        }
        getTotal()
    }, [carrito])

    const value = {
        productos : [productos],
        menu : [menu, setMenu],
        addCarrito: addCarrito,
        carrito: [carrito,setCarrito],
        total: [total,setTotal]
    }

    const valueSend = {
        productos : [productos],
        menuSend : [menuSend, setMenuSend],
        addCarritoSend: addCarritoSend,
        carritoSend : [carritoSend,setCarritoSend],
        total: [total,setTotal]
    }

    return (
        <DataContext.Provider value = {value}>
            <DataContextSend.Provider value = {valueSend}>
                {props.children}
            </DataContextSend.Provider>
        </DataContext.Provider>
    )
}