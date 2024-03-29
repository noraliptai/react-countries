import { useState } from "react"
import './Dropdown.css'

function Dropdown({ topic, countries, setFilteredCountries }) {
  const [dropdownShow, setDropdownShow] = useState(false)
  const [selected, setSelected] = useState(null)
  
  const array = []
  countries.map(country => {
    if (Array.isArray(country[topic])) {
      for (let item of country[topic]) {
        if (!array.includes(item)) array.push(item)
      }
    } else if (country[topic]) {
      for (let item of Object.values(country[topic])) {
        if (!array.includes(item)) array.push(item)
      }
    }
  })
  array.sort((a, b) => a.localeCompare(b))

  return (
    <div className="dropdown">
      <p onClick={() => {
        setDropdownShow(show => !show)
        setSelected(null)
        dropdownShow && setFilteredCountries(countries)
        }}>
        {(selected && dropdownShow) ? `All ${topic}` :
          selected ? selected : `All ${topic}`
        }
      </p>

      {dropdownShow
        &&
        <ul>
          {array.map((item, index) =>
            <li
              className="dropdownItem"
              key={index}
              onClick={() => {
                setFilteredCountries(countries.filter(country => {
                  if (Array.isArray(country[topic])) return country[topic].includes(item)
                  else if (country[topic]) return Object.values(country[topic]).includes(item)
                }))
                setSelected(item)
                setDropdownShow(false)
              }}>{item}
            </li>)}
        </ul>
      }
    </div>
  )
}

export default Dropdown