import React, { ReactNode, ChangeEvent } from 'react'
import './Checkbox.scss'
import classNames from 'classnames'

export const Checkbox: React.FunctionComponent<{
  checked: boolean
  onChange: (checked: boolean, event: ChangeEvent<HTMLInputElement>) => void
  label?: ReactNode
  id?: string
  size?: 's' | 'm' | 'l' | 'xl'
}> = ({ checked, onChange, label, id, size = 'm' }) => {
  const sizeClass = ` Checkbox--${size}-size`
  const modifierClasses = classNames(' ', sizeClass, {
    'Checkbox--checked': checked,
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.currentTarget.checked, event)
    }
  }

  return (
    <div className={`Checkbox${modifierClasses}`}>
      <label htmlFor={id} className="Checkbox__wrapper-label">
        <div className="Checkbox__input-wrapper">
          <input
            className="Checkbox__input"
            type="checkbox"
            onChange={handleChange}
            id={id}
            checked={checked}
          />
          <div className="Checkbox__checkmark" />
        </div>
        {label && <span className="Checkbox__label">{label}</span>}
      </label>
    </div>
  )
}
