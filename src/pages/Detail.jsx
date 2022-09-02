import React,{useState} from 'react'
import { Router } from 'react-router-dom'
import flag from '../images/au.svg'
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Detail = () => {

 const [flag,setFlag] = useState("")
 const [name,setName] = useState("")
 const [nativeName,setNativeName] = useState("")
 const [population,setPopulation] = useState("")
 const [region,setRegion] = useState("")
 const [subRegion,setSubRegion] = useState("")
 const [capital,setCapital] = useState("")
 const [domain,setDomain] = useState("")
 const [currency,setCurrency] = useState("")
 const [language,setLanguage] = useState("")
 const [borders,setBorders] = useState("")

 const {id} = useParams()

 const [country, setCountry] = useState()

 useEffect(()=>{
  getCountryDetails()
 },[])

 async function getCountryDetails (){

     const response = await fetch ('https://restcountries.com/v3.1/name/'+id)
     const data = await response.json()
     setCountry(data)
     console.log(data)
     console.log(id)
     console.log(flag)
     setFlag(data[0].flags.svg)
     setName(data[0].name.common)
     setNativeName(data[0].name.nativeName.eng.official)
     setPopulation(data[0].population)
     setRegion(data[0].region)
     setSubRegion(data[0].subregion)
     setCapital(data[0].capital[0])
     setDomain(data[0].tld[0])
     setCurrency(data[0].currencies[0].name)
     setLanguage(data[0].languages.eng)
     setBorders(data[0].borders[1])
 }

 console.log(country)

  return (
    <>
    <div className='detail'>
     <Link to='/'><button className='backBtn'>Back</button></Link> <br/>
      <div className='detailFlex'>
      <div>
         <img className='detailFlag' src={flag}/>
       </div>
       <div className='detailContent'>
          <div className="left">
            <h2 className='detailCountryName'>{name}</h2>
            <p><strong>Native name:</strong> {nativeName}</p>
            <p><strong>Population: </strong> {population}</p>
            <p><strong>Region:     </strong> {region}</p>
            <p><strong>Sub Region: </strong> {subRegion}</p>
            <p><strong>Capital:    </strong> {capital}</p>
         </div>
         <div className='right'>
            <p><strong>Top Level Domain:</strong> {domain}</p>
            <p><strong>Currencies:      </strong> {currency}</p>
            <p><strong>Languages:     </strong> Dutch, French, German</p>
         </div>
       </div>
      </div>
      <div className="borderDetails">
         <p><strong>Border Countries:</strong> </p>
         <p className="borderCountry">{borders}</p>
         <p className="borderCountry">Germany</p>
         <p className="borderCountry">Netherlands</p>
         </div>
           
    </div>
      
    </>
  )
}

export default Detail