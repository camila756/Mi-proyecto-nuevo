import React, {useEffect, useState} from "react"

const PokemonFragment = ({imagen, titulo, textoDescripcion, piePagina}) => {

    return (
        <>
        <div className="card" style={{width:"18rem"}}>
            <img src={imagen} class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{textoDescripcion}</p>
            </div>
            <div className="card-footer text-muted">{piePagina}</div>
        </div>
        </>
    )
}

export default PokemonFragment