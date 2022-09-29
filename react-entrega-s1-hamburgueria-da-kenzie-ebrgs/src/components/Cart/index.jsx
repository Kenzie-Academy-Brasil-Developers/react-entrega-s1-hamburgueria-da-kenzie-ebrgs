import "./style.css"

const Cart = ({ productsCarr, setCarr }) => {
    const valorTotal = productsCarr.reduce((valorAnterior, valorAtual) => {
        return valorAnterior+valorAtual.dados.price
    }, 0)

    function removerProd (idProd) {
        const novaLista = productsCarr.filter(product => product.dados.id !== idProd)
        setCarr(novaLista)
    }
    return (
        <div className="carrinhoCompras">
            <h2>Carrinho de compras</h2>
            {
                productsCarr.length ? (
                    <ul className="cartList">
                        {
                            productsCarr.map(product => {
                                return (
                                    <li key={product.dados.id}>
                                        <img src={product.dados.img} alt="" />
                                        <div>
                                            <h3>{product.dados.name}</h3>
                                            <p>{product.dados.category}</p>
                                        </div>
                                        <button onClick={() => removerProd(product.dados.id)}>Remover</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                ) : (
                    <div>
                        <h3>Sua sacola está vazia</h3>
                        <span>Adicione itens</span>
                    </div>
                )
            }
            <div className="valorTotal">
                <h3>Valor total</h3>
                <span>R$ {valorTotal.toFixed(2)}</span>
            </div>
            <button className="btnRemoverTudo" onClick={() => setCarr([])}>Remover todos</button>
        </div>
    )
}

export default Cart