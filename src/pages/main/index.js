//importando a biblioteca
import React, { Component } from "react"
//importando a api
import api from '../../services/api'
import { Link } from 'react-router-dom'

import './styles.css'

// usando class para externder o component
export default class Main extends Component {
    // const [product, setProduct] = useState([])  
    // variavel de estado
    state = {
        products: [],
        productInfo: [],
        page: 1,
    }
    // metodos de ciclo de vida (montagem)
    // Esse metodo executa assim que o componente é mostrado em tela
    componentDidMount(){
        this.loadProducts()
    }

    // para funções proprias é necessario usar arrow function, para não sobrescrever o this
    loadProducts = async (page = 1) =>{
        const response = await api.get(`/products?page=${page}`)

        // separando as variaveis com o rest operator
        // docs salva os produtos e productInfo é os dados do produto 
        const {docs, ...productInfo} = response.data
        
        //atualizando a variavel estado
        this.setState({ products: docs, productInfo, page })
    }

    prevPage = () => {
        const { page, productInfo } = this.state

        if (page === 1) return

        //pega a pagina anterior
        const pageNumber = page - 1
            
        this.loadProducts(pageNumber)

    }
    
    nextPage = () => {
        // declarando as variais de states (pega a pagina atual e as informações)
        const { page, productInfo } = this.state
        // verificando se a pagina atual é a ultima
        if (page === productInfo.pages) return

        //pega a proxima pagina
        const pageNumber = page + 1
       
        this.loadProducts(pageNumber)
    }
    
    render(){
        const { products, page, productInfo } = this.state

        return (
            //retornando a div com a listagem de produtos
            <div className="product-list">
                {/* percorendo a variavel estado dos produtos e exibindo os itens */}
                {products.map(product => (
                    // necessario passar uma key unica no primeiro item apos o map para cada produto
                    // title e _id estão vindo do BD
                  <article key={product._id}>
                      {/* dardos dos produtos */}
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <Link to={`/products/${product._id}`}>Acessar</Link>
                  </article> 
                ))}

                <div className="actions">
                    <button disabled={page===1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages}onClick={this.nextPage}>Proximo</button>
                </div>
            </div>
        )
    }
}
