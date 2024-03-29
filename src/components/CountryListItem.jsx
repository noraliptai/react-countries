
function CountryListItem({ index, country, setSelectedCountry }) {
  return (
    <div className="countryName" key={index}>
      <img src={country.flags.png}/>
      <h2>{country.name.common}</h2>
      <button onClick={() => {
        setSelectedCountry(country)
      }}>Learn more</button>
    </div>
  )
}

export default CountryListItem