function SaludoHijo(props) {

    let saludarPadre = props.saludoDesdeHijo;

    return(
        <div style={{backgroundColor: "lightcoral"}}>
            <h1>Soy el hijo</h1>
            <button onClick={() => saludarPadre(props.nombre)}>¡Saluda al padre!</button>
        </div>
    );
}

export default SaludoHijo;