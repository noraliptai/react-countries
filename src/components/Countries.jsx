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

  let sortedCountries = filteredCountries

  switch (sort) {
    case "AZ":
      sortedCountries = [...filteredCountries].sort((a, b) => a.name.common.localeCompare(b.name.common))
      break
    case "ZA":
      sortedCountries = [...filteredCountries].sort((a, b) => b.name.common.localeCompare(a.name.common))
      break
    case "popASC":
      sortedCountries = [...filteredCountries].sort((a, b) => a.population - b.population)
      break
    case "popDESC":
      sortedCountries = [...filteredCountries].sort((a, b) => b.population - a.population)
      break
    case "areaASC":
      sortedCountries = [...filteredCountries].sort((a, b) => a.area - b.area)
      break
    case "areaDESC":
      sortedCountries = [...filteredCountries].sort((a, b) => b.area - a.area)
  }

  return (
    <>
      <h1 className="title">Countries of the world</h1>
      
      <div className="sortButtons">
        
        <button onClick={() => {
            sort === "AZ" ? setSort("ZA") : setSort("AZ")
          }}>Sort alphabetically</button>

        <button onClick={() => {
            sort === "popDESC" ? setSort("popASC") : setSort("popDESC")
          }}>Sort by population</button>

        <button onClick={() => {
            sort === "areaDESC" ? setSort("areaASC") : setSort("areaDESC")
          }}>Sort by area</button>
        
      </div>

      <input className="searchInput" type="text" placeholder="Search country by name" onChange={(event) => {
        setSearchString(event.target.value)
      }}/>

      <div className="filters">
        <Dropdown topic={"continents"} countries={countries} setFilteredCountries={setFilteredCountries}/>
        <Dropdown topic={"timezones"} countries={countries} setFilteredCountries={setFilteredCountries}/>
        <Dropdown topic={"languages"} countries={countries} setFilteredCountries={setFilteredCountries}/>
      </div>

      <div className="countryList">
        {sortedCountries.map((country, index) => <CountryListItem country={country} key={index} setSelectedCountry={setSelectedCountry}/>)}
      </div>
    </>
  )
}

export default Countries