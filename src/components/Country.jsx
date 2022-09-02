import React from 'react'
import flag from  '../images/au.svg'
import { Link } from 'react-router-dom'

const Country = ({country}) => {
  return (
    <>
       <div className="countryCard">
       <Link to={`/detail/${country.name.common}`}><img className='smallFlag' src={country.flags.svg}/></Link>
            <div className="cardDetails">
            <h3 className='detailCountryName'>{country.name.official}</h3>
              <p><strong>Population: </strong> {country.population}</p>
              <p><strong>Region:     </strong> {country.region}</p>
              <p><strong>Capital:    </strong> {country.capital}</p>
            </div>
          </div>
    </>
  )
}

export default Country