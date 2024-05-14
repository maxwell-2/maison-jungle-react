import '../Styles/Footer.css'
import { useState } from 'react'

function Footer(){

    const [valeurmail,setvaleurmail]=useState('')

    function Miseajour(e){
        setvaleurmail(e.target.value)
    }

    function Mail() {
		if (!valeurmail.includes('@')) {
            alert("Votre adresse mail ne contient pas '@'")
        }
	}

    return(
    <footer className='Pied'>
    <div className='footer_el'>
        Pour les passionné·e·s de plantes 🌿🌱🌵
    </div>
    <div className='footer_el'>Laissez-nous votre mail :</div>
    <input
        placeholder='Entrez votre mail'
        onChange={Miseajour}
        value={valeurmail}
        onBlur={Mail}
    />
</footer>
    )
}

export default Footer