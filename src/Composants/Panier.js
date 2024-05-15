

import '../Styles/Panier.css'
import { useEffect,useState } from 'react'

function Panier({panier,updatepanier}){

      const [isOpen,setisOpen]=useState(true)
      const total = panier.reduce((acc,plantType) =>
      acc + plantType.amount * plantType.price,0)

      useEffect(()=>{
         document.title=`LMJ: ${total} d'achats`
      },[total])
    return  isOpen ? (
		<div className='panier'>
			<button
				onClick={() => setisOpen(false)}
			>
				Fermer
			</button>
			{panier.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{panier.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button className='btn-vider' onClick={() => updatepanier([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='panier'>
			<button
				onClick={() => setisOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}
export default Panier