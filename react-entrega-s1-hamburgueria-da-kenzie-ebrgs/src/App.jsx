import Logo from "./assets/img/Logo.png"
import { useEffect, useState } from 'react';
import './App.css';
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  const [products, setProducts] = useState([])
  const [carr, setCarr] = useState([])
  const [verificar, setVerificar] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [valorPesquisado, setValor] = useState("")
  console.log(products)
  useEffect(() => {
    toast.info("Item ja adicionado ao carrinho")
  }, [verificar])

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then(res => res.json())
      .then(res => {
        setProducts(res)
        setFilteredProducts(res)
      })
  }, [])

  function filtroPesquisa(event) {
    event.preventDefault()

    const filtrados = products.filter(produto => produto.name.toLowerCase() === valorPesquisado.toLowerCase() || produto.category.toLowerCase() === valorPesquisado.toLowerCase())
    if(filtrados.length) {
      console.log(filtrados.length)
      setFilteredProducts(filtrados)
    } else {
      setFilteredProducts(products)
      console.log("aqui")
    }
  }
  return (
    <div className="App">
      {verificar ? <ToastContainer /> : null}
      <header className="appHeader">
        <img src={Logo} alt="Logo" />
        <form onSubmit={filtroPesquisa}>
          <input type="text" onChange={(event) => setValor(event.target.value)}/>
          <button type="submit">Pesquisar</button>
        </form>
      </header>
      <div className="container">
        <ProductList products={filteredProducts} setCarr={setCarr} carr={carr} setVerificar={setVerificar}/>
        <Cart productsCarr={carr} setCarr={setCarr} />
      </div>
    </div>
  );
}

export default App;
