import { useState } from "react";

function Car(props) {

    const [state, setState] = useState(false);
    const [velocidad, setVelocidad] = useState(0);

    let coche = {
        marca: props.marca,
        modelo: props.modelo,
        velocidadMax: props.velocidadMax,
        aceleracion: props.aceleracion
    };

    const comprobarEstado = () => {
        if(state){
            return (<h1 style={{color: "green"}}>Arrancado</h1>)
        }   
        else{
            return (<h1 style={{color: "red"}}>Apagado</h1>)
        }
    }

    const acelerar = () => {
        if(!state){
            alert("El coche esta apagado, encienda primero");
        }
        else{
            if(velocidad < coche.velocidadMax) setVelocidad(velocidad + coche.aceleracion);
        }
    };

    return(
        <div>
            {comprobarEstado()}
            <h1>Marca: {coche.marca}</h1>
            <h2 className="yellow">Modelo: {coche.modelo}</h2>
            <h3 className="red">Velocidad actual: {velocidad}</h3>
            <button onClick={() => {setState(!state)}}>on/off Coche</button>
            <button onClick={acelerar}>Acelerar</button>
        </div>
    );
}

export default Car;