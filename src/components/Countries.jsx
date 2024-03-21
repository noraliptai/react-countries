import { useState } from "react"
import './Countries.css'

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
          .map((country, index) => 
            <div className="countryName" key={index}>
              <img src={country.flags.png}/>
              <h2>{country.name.common}</h2>
              <button onClick={() => {
                setSelectedCountry(country)
              }}>Learn more</button>
            </div>
          )
        :
        sort === "desc"
        ?
        [...countries]
        .sort((a, b) => b.name.common.localeCompare(a.name.common))
        .map((country, index) => 
          <div className="countryName" key={index}>
            <img src={country.flags.png}/>
            <h2>{country.name.common}</h2>
            <button onClick={() => {
              setSelectedCountry(country)
            }}>Learn more</button>
          </div>
          )
        :
        countries.map((country, index) => 
          <div className="countryName" key={index}>
            <img src={country.flags.png}/>
            <h2>{country.name.common}</h2>
            <button onClick={() => {
              setSelectedCountry(country)
            }}>Learn more</button>
          </div>
          )
        }
      </div>
    </>
  )
}

export default Countries