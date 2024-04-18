import { useEffect, useState } from "react"
import './Dropdown.css'

function Dropdown({ topic, filteredCountries, filters, setFilters }) {
  const [dropdownShow, setDropdownShow] = useState(false)
  const [selected, setSelected] = useState(null)
  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!document.getElementById(topic).contains(e.target)) setDropdownShow(false)
    }
    
    window.addEventListener("click", handleClickOutside)
    
    return () => {
      window.removeEventListener("click", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (filters[topic] === "") setSelected(null)
  }, [filters])

  const array = []
  filteredCountries.map(country => {
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
    <div id={topic} className="dropdown">
      <p onClick={() => {
        setDropdownShow(show => !show)
        dropdownShow && setSelected(null)
        dropdownShow && setFilters({...filters, [topic]: ""})
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
                setFilters({...filters, [topic]: item})
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