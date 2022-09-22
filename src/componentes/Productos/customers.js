import React from 'react'

export const Customers = ({customers}) => {
    return(
        
        <div>
            
        {
        customers.map(customer => (
            <div key={customer.id}>
                <p>Hola{customer.email}</p>
                <p>Hola{customer.phone}</p>
            </div>
            ))
        }
        
        </div>
    )
}