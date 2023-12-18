import Buttons from "./components/Buttons"
import Footer from "./components/Footer"
import Logo from "./components/Logo"
import Searchbar from "./components/Searchbar"
import Topbar from "./components/Topbar"

function App() {

  return (
    <div className="min-h-screen">
      <Topbar/>
      <Logo/>
      <Searchbar/>
      <Buttons/>
      <Footer/>
    </div>
  )
}

export default App
