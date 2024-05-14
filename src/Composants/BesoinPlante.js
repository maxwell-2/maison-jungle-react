import water from '../Images/water.svg'
import sun from '../Images/sun.svg'



function BesoinPlante({TypeBesoin,EchelleBesoin}){
    const range=[1,2,3]
    const ValeurBesoin=
    TypeBesoin==='Eau'? (<img src={water} alt="eau"/>) : (<img src={sun} alt="soleil"/>)
    return(
        <div>
        {range.map((rangeElem)=>
        EchelleBesoin <= rangeElem ? 
        <span key={rangeElem.toString()}>{ValeurBesoin}</span>:null
        )}
        </div>
    )
}

export default BesoinPlante