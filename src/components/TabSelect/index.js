import React from 'react'
import './index.css'

const TabSelect = ({ value, options, onChange }) => {
  return (
    <div className='tab-selector'>
      <ul>
        {options.map((opt) => (
          <li
            key={opt.value}
            className={`tab-item ${opt.value === value ? 'selected' : ''}`}
            onClick={() => onChange(opt.value)}>
            {opt.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TabSelect
