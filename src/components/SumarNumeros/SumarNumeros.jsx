import './styles.css'
//import imagen from '../../assets/images.jpg'

function SumarNumeros(props) {

    const sumarNumeros = (n1, n2) => {
        console.log(n1 + n2);
        return n1 + n2;
    };

    return(
        /*<img src={imagen}></img>*/
        <>
            <p>Numero sumado: {sumarNumeros(props?.n1, props?.n2)}</p>
            <button onClick={() => sumarNumeros(props?.n1, props?.n2)}>Numero sumado: {}</button>
            <br />
        </>
    );
}

export default SumarNumeros;