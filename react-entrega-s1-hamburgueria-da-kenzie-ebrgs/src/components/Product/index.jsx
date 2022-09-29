import "./style.css"

const Product = ({ dados, setCarr, carr, setVerificar }) => {
    const ids = carr.map(obj => obj.dados.id)
    return (
        <li key={dados.id} className="cardProduct">
            <img src={dados.img} alt="" />
            <div>
                <h2>{dados.name}</h2>
                <p>{dados.category}</p>
                <span>{dados.price.toFixed(2)}</span>
                <button type="button" onClick={() => {
                    if (ids.includes(dados.id)) {
                        setVerificar(true)
                        setTimeout(() => {
                            setVerificar(false)
                        }, 6000)
                    } else {
                        setCarr((prevProdu) => [...prevProdu, {dados}])
                    }
                }}>Adicionar</button>
            </div>
        </li>
    )
}

export default Product