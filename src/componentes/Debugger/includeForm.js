import React from 'react'
import { db } from '../utils/FirebaseUtils'
import Include from './include'
import { doc, setDoc} from "@firebase/firestore";
import { v4 } from "uuid";

const IncludeForm = ({resultado}) =>{

    const addOrEditLink = async (props) =>{
        await setDoc(doc(db, 'Productos', v4()), {
            cantidad: props.cantidad,
            category: props.category,
            id: props.id,
            image: props.image,
            price: props.price,
            title: props.title
        })
        // await db.collection('links').doc().set(LinkObject)
        console.log('agregado');
    }

    return <div>
    <Include resultado_fin = {resultado} addOrEditLink = {addOrEditLink}/>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dicta dolorum mollitia fugit dolor voluptas hic, eligendi iure architecto similique, molestiae repellendus delectus. Ea dicta laborum, sit accusamus provident magnam!</h1>
    </div>
}

export default IncludeForm;