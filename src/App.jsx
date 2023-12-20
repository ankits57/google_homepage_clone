import Apps from "./components/Apps"
import Buttons from "./components/Buttons"
import Footer from "./components/Footer"
import Logo from "./components/Logo"
import Searchbar from "./components/Searchbar"
import Topbar from "./components/Topbar"
import { useState } from "react"

function App() {
  const [appDrawer, setAppDrawer] = useState(false)
  return (
    <div className="min-h-screen">
      <div className="relative z-10">
        <Topbar appDrawer={appDrawer} setAppDrawer={setAppDrawer}/>
        <Apps appDrawer={appDrawer}/>
      </div>
      <Logo/>
      <Searchbar/>
      <Buttons/>
      <Footer/>
    </div>
  )
}

export default App
