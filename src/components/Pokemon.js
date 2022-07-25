import React, {useEffect, useState} from "react"
import Snivy from "../assets/imagenes/pokemon1_snivy.jpg"
import Corvisquire from "../assets/imagenes/pokemon2_corvisquire.jpg"
import Goodra from "../assets/imagenes/pokemon3_goodra.jpg"
import PokemonFragments from "./Fragments/PokemonFragment"
import PokedexFragment from "./Fragments/PokedexFragment"

const Pokemon = () => {

    return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                <PokedexFragment
                    nombre={"Pokémon database"}
                    boton={"Search"}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <PokemonFragments
                        textoDescripcion={"It is very intelligent and calm. Being exposed to lots of sunlight makes its movements swifter."}
                        imagen={Snivy}
                        titulo="Snivy"
                        piePagina="Generation 5" 
                    />
                </div>
                <div className="col-4">
                    <PokemonFragments
                        textoDescripcion={"Its sleek shape is perfect for swimming. It slashes prey with its claws and drains the body fluids."}
                        imagen={Corvisquire}
                        titulo="Corvisquire"
                        piePagina="Generation 8" 
                    />
                </div>
                <div className="col-4">
                <PokemonFragments
                        textoDescripcion={"This very friendly Dragon-type Pokémon will hug its beloved Trainer, leaving that Trainer covered in sticky slime."}
                        imagen={Goodra}
                        titulo="Goodra"
                        piePagina="Generation 6" 
                    />                  
                </div>
            </div>
        </div>
    </>
    )
}
export default Pokemon