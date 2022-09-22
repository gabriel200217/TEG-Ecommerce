import React, {useContext} from 'react'
//import { Link } from 'react-router-dom'
import Nike from '../../images/Nike.jpg'
import { DataContext} from '../../context/Dataprovider'

export const Header = () => {

    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito

    const toogleMenu = () => {
        setMenu(!menu)
    }

    return (
        <header>
            <a href="/">
                <div className="logo">
                    <img src={Nike} alt="logo" width="150"/>
                </div>
            </a>
            <ul>
                <li>
                    <a href="/">
                        INICIO
                    </a>
                </li>
                <li>
                    <a href="/productos">
                        PRODUCTOS
                    </a>
                </li>
            </ul>
            <div className = "cart" onClick = {toogleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item__total">{carrito.length}</span>
            </div>
        </header>
    )
}