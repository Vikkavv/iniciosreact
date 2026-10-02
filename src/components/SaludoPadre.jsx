import SaludoHijo from "./saludoHijo";

function SaludoPadre() {

    const saludoDesdeHijo = (nombre) => {
        console.log("¡Hola desde el hijo! Me llamo " + nombre + ".");
    };

    return(
        <>
            <div style={{backgroundColor: "lightslategray", padding: "1rem"}}>
                <h1>Soy el padre</h1>
                <SaludoHijo saludoDesdeHijo={saludoDesdeHijo} nombre="pepito"/>
                <SaludoHijo saludoDesdeHijo={saludoDesdeHijo} nombre="fulanito"/>
            </div>
        </>
    );
}

export default SaludoPadre;