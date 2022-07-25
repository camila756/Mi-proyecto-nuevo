import React, {useEffect, useState} from "react"

const PokedexFragment = ({nombre, boton}) => {

    return (
        <>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand">{nombre}</a>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">{boton}</button>
                </form>
            </div>
        </nav>
        </>
    )
}

export default PokedexFragment