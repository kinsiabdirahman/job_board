import NavBar from "./NavBar";
import Pages from "./Pages/Pages";
import './App.css'
import Footer from './Footer';

function App(){
  return(
  <div className="main">
    <NavBar/>
    <Pages />
    <Footer />
  </div>
  )
}

export default App