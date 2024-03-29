import { useState } from "react"
import './Countries.css'
import CountryListItem from "./CountryListItem"

function Countries({countries, setSelectedCountry}) {
  const [sort, setSort] = useState("")
  
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

      <div className="countryList">
        {sort === "asc"
          ? 
          [...countries]
          .sort((a, b) => a.name.common.localeCompare(b.name.common))
          .map((country, index) => <CountryListItem country={country} key={index} setSelectedCountry={setSelectedCountry}/>)
        :
        sort === "desc"
          ?
          [...countries]
          .sort((a, b) => b.name.common.localeCompare(a.name.common))
          .map((country, index) => <CountryListItem country={country} key={index} setSelectedCountry={setSelectedCountry}/>)
        :
        countries.map((country, index) => <CountryListItem country={country} key={index} setSelectedCountry={setSelectedCountry}/>)
        }
      </div>
    </>
  )
}

export default Countries