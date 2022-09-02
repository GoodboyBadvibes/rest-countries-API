import React,{useState,useEffect} from 'react'
import flag from  '../images/au.svg'
import Country from '../components/Country'
import { useNavigate } from 'react-router-dom'

const Home = () => {

   const navigate = useNavigate()

    const[filterOptions,setFilterOptions] = useState(false)

    const[allCountries, setAllCountries] = useState([])
    const[filteredCountries, setFilteredCountries] = useState([])
    const[searchInput, setSearchInput] = useState("")
    const[APIURL, setAPIURL] = useState("")

    const[mode, setMode] = useState('homeDarkMode')


    useEffect(()=>{
      if(APIURL === ''){
      setAPIURL('https://restcountries.com/v3.1/all')
      getAllCountries()
      }else{
        getAllCountries()
      }
    })

      function changeMode(){

        if(mode==='homeDarkMode'){
          setMode('homeLightMode')
        }else{
          setMode('homeDarkMode')
        }

      }

      function showFilterOptions(){
        if (!filterOptions){
          setFilterOptions(true)
        }else{
          setFilterOptions(false)
        }
      }

      function removeFilterOptions(){
        if(filterOptions){
          setFilterOptions(false)
        }
      }
         

      async function getAllCountries(){
        const response = await fetch(APIURL) 
        const data = await response.json()
        setAllCountries(data)
        console.log(data)
      }
       
      // function searchFilter(searchValue){
      //   setSearchInput(searchValue)
      //   if (searchInput !== ''){
      //      setFilteredCountries(allCountries.filter((each)=>{
      //       return Object.values(each).join('').toLowerCase().includes(searchInput.toLowerCase())
      //      }))
      //       setAllCountries([])
      //   }else{
      //       getAllCountries()
      //       setFilteredCountries([])
      //   }
         
         

      // }

  return (
    <>  
    <div onClick={removeFilterOptions} className= {mode}>
     <div className="searchAndFilter">
      <input type="search" placeholder='Search for a country...' onChange={(e) =>setSearchInput(e.target.value)} />
      <p onClick={showFilterOptions} className='filter'>Filter by Region</p>
      {filterOptions&&( <ul className='filterOptions'>
        <li onClick={(e)=> {setAPIURL('https://restcountries.com/v3.1/region/africa')
                              navigate('/')
                           } }>Africa</li>
        <li onClick={(e)=> {setAPIURL('https://restcountries.com/v3.1/region/america') 
                              navigate('/')
                              } }>America</li>
        <li onClick={(e)=> {setAPIURL('https://restcountries.com/v3.1/region/asia')
                             navigate('/')
                             } }>Asia</li>
        <li onClick={(e)=> {setAPIURL('https://restcountries.com/v3.1/region/europe')
                             navigate('/')
                             } }>Europe</li>
        <li onClick={(e)=> {setAPIURL('https://restcountries.com/v3.1/region/oceania')
                            navigate('/')
                            } }>Oceania</li>
        <li onClick={(e)=> {setAPIURL('')
                             navigate('/')
                             } }>All</li>
      </ul> )}
      </div>
      <div className="allCards">
      {/* {filteredCountries&&filteredCountries.map( country => (
            <Country key={country.name.common}  country={country}/>
            ))
          }
      {allCountries&&allCountries.map( country => (
            <Country key={country.name.common}  country={country}/>
            ))
          } */}
      {allCountries.length ? 
        allCountries.filter((val)=>{
          if(searchInput.length==='')return val
          else if(val.name.common.toLowerCase().includes(searchInput.toLowerCase())) return val
        }) .map( country => (
          <Country key={country.name.common}  country={country}/>
          ))
        : <p>loading...</p>

      }
          </div>
      </div>
      
    </>
  )
}

export default Home