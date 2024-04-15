import './CountryData.css'
import CountryListItem from './CountryListItem'

function CountryData({countries, selectedCountry, setSelectedCountry}) {

  return (
    <div className="countryDetails">
      <h1>{selectedCountry.name.common}</h1>
      <h3>Capital: {selectedCountry.capital}</h3>
      <img src={selectedCountry.flags.png}/>
      <h4>Area: {selectedCountry.area} km2</h4>
      <h4>Population: {selectedCountry.population}</h4>
      <p>Continent: {selectedCountry.continents.map(continent => continent).join(", ")}</p>
      <p>Region: {selectedCountry.region}</p>
      <p>Timezones: {selectedCountry.timezones.map(timezone => timezone).join(", ")}</p>
      <p>Languages: {selectedCountry.languages && Object.values(selectedCountry.languages).join(", ")}</p>
      <p>Currencies: {selectedCountry.currencies && Object.keys(selectedCountry.currencies).map(key => selectedCountry.currencies[key].name).join(", ")}</p>
      <div className="neighbors">Neighbors:
        <div>
          {!selectedCountry.borders ? "This country has no neighbours." : selectedCountry.borders.map((neighbor, index) => <CountryListItem country={countries.find(country => country.cca3 === neighbor)} key={index} setSelectedCountry={setSelectedCountry}/>)}
        </div>
      </div>
      <button className="back" onClick={() => {
        setSelectedCountry(null)
      }}>Back to country list</button>
    </div>
  )
}

export default CountryData