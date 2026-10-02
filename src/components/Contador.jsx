import { useState } from "react";

function Contador() {

    const [numero, setNumero] = useState(0); 

    return(
        <>
            <h1>{numero}</h1>
            <button onClick={() => {setNumero(numero + 1)}}>+</button>
            <button onClick={() => {setNumero(numero - 1)}}>-</button>
        </>
    );
}

export default Contador;