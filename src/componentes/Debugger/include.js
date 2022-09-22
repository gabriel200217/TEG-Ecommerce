import React, {useState} from 'react'
import { v4 } from "uuid";

const Include = (props) =>{

    const initialStateValues = {
        cantidad: '',
        category: '',
        id: '',
        image: '',
        price: '',
        title: ''
    }

    const [values, setValues] = useState(initialStateValues)

    const handleInputChange = e =>{
        const{name, value} = e.target
        setValues({...values, [name]: value})
        // console.log(name, value)
    }

    const handleSubmit = e =>{
        e.preventDefault();
        // console.log(values)
        props.addOrEditLink(values)
        setValues ({...initialStateValues})
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="cantidad" placeholder="cantidad" onChange={handleInputChange} value={values.cantidad}/>
            <input type="text" name="category" placeholder="categoria" onChange={handleInputChange} value={values.category}/>
            <input type="text" name="id" placeholder="id" value={v4()} onClick={handleInputChange}/>
            <input type="text" name="image" value={props.resultado_fin} onClick={handleInputChange}/>
            <input type="text" name="price" placeholder="precio" onChange={handleInputChange} value={values.price}/>
            <input type="text" name="title" placeholder="producto" onChange={handleInputChange} value={values.title}/>
            <button>Save</button>
        </form>
    )
}

export default Include;