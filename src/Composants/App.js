import Entete from'./Entete.js'
import BoutiquePlantes from './BoutiquePlantes.js'
import Footer from './Footer.js'
import '../Styles/Entete.css'
import logo from '../Images/logo.png'
import Panier from './Panier.js'
import '../Styles/Main.css'
import { useState } from 'react'

function App() {
  const [panier,updatepanier]=useState(0)
  return (
    <div >

    <Entete >
    <img src={logo} alt='JungleImage'/>
    <h1 className="TextEntete">La maison jungle</h1>
    </Entete>

    <div className='main'>
    <Panier panier={panier} updatepanier={updatepanier} />
    <BoutiquePlantes panier={panier} updatepanier={updatepanier}/>
    </div>
    
    <Footer/>

    </div>
  )
}

export default App;
