import Matematicas from "./Matematicas";

function PadreMatematicas(props) {
    const duplicarNum = (num) => {
        console.log(num * 2);
    };

    const triplicarNum = (num) => {
        console.log(num * 3);
    };

    return(
        <>
            <h1>Padre Matemáticas</h1>
            <Matematicas duplicarNumPadre={duplicarNum} triplicarNumPadre={triplicarNum} num={3} />
            <Matematicas duplicarNumPadre={duplicarNum} triplicarNumPadre={triplicarNum} num={4} />
        </>
    );
}

export default PadreMatematicas;