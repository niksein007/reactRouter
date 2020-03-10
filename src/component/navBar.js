import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar(props) {
    return (
        <div>
            <nav>
            <Link to="/">
                <h2>Home</h2>
                </Link>
                <ul>
                <Link to="/Shop"> <li>Shop</li></Link>
                <Link to="/aboutus">   <li>About us</li></Link>
                  <li>Basket:{props.item}</li>
                </ul>
            </nav>
        </div>
    )
}
