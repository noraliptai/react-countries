import { useState, useEffect } from "react"
import './Countries.css'
import CountryListItem from "./CountryListItem"
import Dropdown from "./Dropdown"

function Countries({countries, setSelectedCountry}) {  
  const [sort, setSort] = useState("")
  const [searchString, setSearchString] = useState("")
  const [filteredCountries, setFilteredCountries] = useState(countries)
  
  useEffect(() => {
    setFilteredCountries(countries.filter(country => country.name.common.toLowerCase().includes(searchString.toLowerCase())))
  }, [searchString, countries])

  return (
    <>
      <h1 className="title">Countries of the world</h1>
      <div className="sortButtons">
        
        <button onClick={() => {
          setSort("asc")
        }}>sort A-Z</button>
        
        <button onClick={() => {
          setSort("desc")
        }}>sort Z-A</button>
      </div>

      <input className="searchInput" type="text" placeholder="Search country by name" onChange={(event) => {
        setSearchString(event.target.value)
      }}/>


      <Dropdown topic={"continents"} countries={countries} setFilteredCountries={setFilteredCountries}/>
      <Dropdown topic={"timezones"} countries={countries} setFilteredCountries={setFilteredCountries}/>
      <Dropdown topic={"languages"} countries={countries} setFilteredCountries={setFilteredCountries}/>

      <div className="countryList">
        {sort === "asc"
          ? 
          [...filteredCountries]
          .sort((a, b) => a.name.common.localeCompare(b.name.common))
          .map((country, index) => <CountryListItem country={country} key={index} setSelectedCountry={setSelectedCountry}/>)
        :
        sort === "desc"
          ?
          [...filteredCountries]
          .sort((a, b) => b.name.common.localeCompare(a.name.common))
          .map((country, index) => <CountryListItem country={country} key={index} setSelectedCountry={setSelectedCountry}/>)
        :
        filteredCountries.map((country, index) => <CountryListItem country={country} key={index} setSelectedCountry={setSelectedCountry}/>)
        }
      </div>
    </>
  )
}

export default Countries