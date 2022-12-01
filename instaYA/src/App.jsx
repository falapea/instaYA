import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './components/Login'
import Registro from './components/Registro'
import Gestion from './components/GestionDePaquetes'
function App() {


  return (
    <div className="App">
      <Header />
      <Login />
      <Registro />
      <Gestion />
      <Footer />

    </div>
  )
}


export default App
