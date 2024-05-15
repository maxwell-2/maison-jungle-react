
import BesoinPlante from './BesoinPlante.js'
import '../Styles/Item.css'


function ItemPlante({id,name,cover,light,water,price}){
   
    function payer(plantName){
        alert(`Vous voulez payer ${plantName}?`)
    }

return(

    <li key={id} onClick={()=>payer(name)}>
    <div className='img-price'>
    <span className='prix-plante' key={`${price}-${name}`}>{price}£</span>
    <img  src={cover} alt='plante' className='lesplantes'/>
    </div>
    <div className='lesbesoins'>
    {name}
    <BesoinPlante  TypeBesoin='Eau' EchelleBesoin={water}/>
    <BesoinPlante  TypeBesoin='Soleil' EchelleBesoin={light}/>
    </div>
    </li>
)
}

export default ItemPlante 