import React from 'react'

export default function Shop(props) {
    return (
        <div>
            <p>Shop Component</p>
            <p>Add item to basket</p>
            <button onClick={props.addItem}>add</button>
        </div>
    )
}
