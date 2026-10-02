function Matematicas(props) {
    return(
        <>
            <h1>Hijo Matemáticas</h1>
            <button onClick={() => props.duplicarNumPadre(props.num)}>Duplicar numero</button>
            <button onClick={() => props.triplicarNumPadre(props.num)}>Triplicar numero</button>
        </>
    );
}

export default Matematicas;