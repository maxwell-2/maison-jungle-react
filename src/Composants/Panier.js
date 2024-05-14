

import '../Styles/Panier.css'
import { useEffect } from 'react'

function Panier({panier,updatepanier}){
      const PrixPlante=8
      const total = PrixPlante * panier
      useEffect(()=>{
         document.title=`LMJ: ${total} d'achats`
      },[total])
    return(
     <div  className="panier">

        <h2>Panier</h2>
        <p>Prix d'une plante: {PrixPlante}£</p>
        <p>Total:{total}£</p>
        <button onClick={()=>updatepanier(0)}>Vider le panier</button>

     </div>
    )
}

export default Panier