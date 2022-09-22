import React, { useState } from 'react'
import { uploadFile } from '../utils/FirebaseUtils'
// import Include from './include'
import IncludeForm from './includeForm'

export const Debugging = () => {

    const [file,setFile] = useState(null)
    const [resultado, setResultado] = useState([]);

    const WorkingSubmit = async (e) =>{
        e.preventDefault();
        try{
            const result = await uploadFile(file)
            alert(result)
            setResultado(result)
        }catch(error){
            console.error(error)
            alert('intente más tarde, error interno')
        }
    }

    return(
    <div>
        <form onSubmit={WorkingSubmit}>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <input type="file" name="" id="" onChange={e => setFile(e.target.files[0])}/>
            <button>Enviar</button>
        </form>
        <>
        {/* <Include/> */}
        <IncludeForm resultado = {resultado}/>
        </>
    </div>
        
    )
}