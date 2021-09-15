import React from 'react'
import style from "./mapping.module.css"


export default function Mapping({state=[]}) {

    return (
        <div className={style.container}>

            <h3>Comments</h3>

            {
                state?state.length>0?state.map(item=>(
                    <ul key={item.id}>
                        <li>Name: {item.name}</li>
                        <li>Text: {item.text}</li>
                    </ul>
                )):"Data has not been loaded yet":"Data has not been loaded yet"
            }

        </div>
    )
}
