import Product from "../Product"
import "./style.css"

const ProductList = ({ products, setCarr, carr, setVerificar }) => {
    return (
        <ul className="productList">
            {
                products.map(product => <Product dados={product} setCarr={setCarr} carr={carr} setVerificar={setVerificar}/>)
            }
        </ul>
    )
}

export default ProductList