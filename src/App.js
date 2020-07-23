import React from 'react'
//importando meus estilos de pagina
import "./styles.css"
// importando o header para ser declarado na div
import Header from './components/Header'
// importando o main 
import Main from './pages/main/index'
// importando as rotas
import Routes from './routes'


//função de contrução
const App = () => (
  // criando minha div
  <div className="App">
    {/* chamando meu header */}
    <Header />
    {/* chamando o main */}
    <Routes />
  </div>
)

// exportando meu app
export default App;
