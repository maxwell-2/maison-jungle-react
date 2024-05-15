import monstera from '../Images/monstera.jpg'
import ItemPlante from './ItemPlante.js'
import lyrata from '../Images/lyrata.jpg'
import pothos from '../Images/pothos.jpg'
import succulent from '../Images/succulent.jpg'
import olivier from '../Images/olivier.jpg'
import mint from '../Images/mint.jpg'
import calathea from '../Images/calathea.jpg'
import cactus from '../Images/cactus.jpg'
import basil from '../Images/basil.jpg'
import '../Styles/Boutique.css'

const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		light: 2,
		water: 3,
		cover: monstera,
		price:16
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		light: 3,
		water: 1,
		cover: lyrata,
		price:14
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		light: 1,
		water: 2,
		cover: pothos,
		price:8
	},
	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
		light: 3,
		water: 1,
		cover: basil,
		price:12
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		light: 3,
		water: 1,
		cover: olivier,
		price:14
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
		light: 2,
		water: 2,
		cover: cactus,
		price:10
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		light: 2,
		water: 3,
		cover: mint,
		price:8
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
		light: 2,
		water: 1,
		cover: calathea,
		price:11
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		cover: succulent,
		price:16
	}
]

function BoutiquePlantes({panier,updatepanier}){

	const categories=plantList.reduce((acc,plant) =>
		acc.includes(plant.category)? acc : acc.concat(plant.category),[])

	function ajouter_panier(name,price){
		const plantecouranteAjouter = panier.find((planteAjouter)=>
			planteAjouter.name === name)
		if (plantecouranteAjouter) {
			const paniersansCourante=panier.filter((planteAj)=>
				planteAj.name !== name)
			updatepanier([...paniersansCourante,{name,price,amount:plantecouranteAjouter.amount+1}])

		}else{
            updatepanier([...panier,{name,price,amount:1}])
		}		
	}

    return(
    <div >
	<ul>
    {categories.map((uniquecat)=>
	<li key={uniquecat}>
	{uniquecat}
	</li>
	)}
	</ul>
	
    <ul className='Boutique'>
    {plantList.map(({id,name,cover,light,water,price})=>(
	  <div className='ensemble'>
     <ItemPlante id={id}
     name={name}
     cover={cover}
	 light={light}
	 water={water}
	 price={price}
     />
	 <button className='btn-ajouter'  onClick={()=>ajouter_panier(name,price)}>Ajouter au panier</button>
	 
	 </div>
	 
	 ))}
       
    </ul>  
    </div>    
    )
}
 
export default BoutiquePlantes