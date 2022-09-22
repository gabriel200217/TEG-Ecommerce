import React, { useEffect, useState } from 'react'
import { Customers } from '../Productos/customers';
import { firebaseBuscar } from './FirebaseUtils';

export const CustomerList = () => {

    const [clientes, setClientes] = useState([]);
  
    useEffect(() => {
      buscarClientes();
    }, []);
  
    const buscarClientes = async () => {
      let resultado = await firebaseBuscar('clientes');
      setClientes(resultado);
    }
    
    return<>
        <Customers customers={clientes}/>
    </>
}