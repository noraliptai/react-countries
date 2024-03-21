import { useState, useEffect } from 'react'
import './App.css'
import Countries from './components/Countries'
import CountryData from "./components/CountryData"

function App() {
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data)
      })
  }, [])

  return (
    <>
      {selectedCountry
      ? <CountryData selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}/>
      : countries.length > 0
        ? <Countries countries={countries} setSelectedCountry={setSelectedCountry}/>
        : <p>Loading...</p>
      }
    </>
  )
}

export default App
