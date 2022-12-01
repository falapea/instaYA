import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './components/Login'
import Registro from './components/Registro'
import Gestion from './components/GestionDePaquetes'
import Nuevaorden from './components/Nuevaorden'
function App() {


  return (
    <div className="App">
      <Header />
      <Nuevaorden/>
      
      <Footer />

    </div>
  )
}


export default App
