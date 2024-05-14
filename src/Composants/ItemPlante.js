
import BesoinPlante from './BesoinPlante.js'
import '../Styles/Item.css'


function ItemPlante({id,name,cover,light,water}){
   
    function payer(plantName){
        alert(`Vous voulez payer ${plantName}?`)
    }

return(

    <li key={id} onClick={()=>payer(name)}>
    <img  src={cover} alt='plante' className='lesplantes'/>
    <div className='lesbesoins'>
    {name}
    <BesoinPlante  TypeBesoin='Eau' EchelleBesoin={water}/>
    <BesoinPlante  TypeBesoin='Soleil' EchelleBesoin={light}/>
    </div>
    </li>
)
}

export default ItemPlante 