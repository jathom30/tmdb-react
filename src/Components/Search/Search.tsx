import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Search.scss'
import { Text, Modal } from 'Components'
import { useDebouncedCallback } from 'Hooks'
import { getSearchMovie } from 'Requests'
import { MovieType } from 'Types'

export const Search = ({
  onSelect,
}: {
  onSelect: (movie: MovieType) => void
}) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="Search">
      <button
        type="button"
        className="Search__button"
        onClick={() => setIsActive(!isActive)}
      >
        <FontAwesomeIcon icon={faSearch} />
        Search for a movie
      </button>

      {isActive && (
        <SearchModal
          onSelect={onSelect}
          onClose={() => setIsActive(false)}
        />
      )}
    </div>
  )
}

const SearchModal = ({
  onSelect,
  onClose,
}: {
  onSelect: (location: any) => void
  onClose: () => void
}) => {
  const [suggestions, setSuggestions] = useState<MovieType[]>()
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => inputRef.current?.focus(), [])

  const getLocationsDebounced = useDebouncedCallback(async (query: string) => {
    const results = await getSearchMovie(query)
    setSuggestions(results.data.results)
  }, 500)

  return (
    <Modal positionFromTop="6rem" offClick={onClose}>
      <div className="Search__model-content">
        <div className="Search__search">
          <FontAwesomeIcon icon={faSearch} className="Search__icon" />
          <input
            placeholder="Search for a movie"
            ref={inputRef}
            className="Search__input"
            type="text"
            onChange={(e) => getLocationsDebounced(e.target.value)}
          />
        </div>
        <Text on="white" kind="subdued" size="xs">
          Search by city, zip, etc.
        </Text>

        {!!suggestions && suggestions.length > 0 && (
          <ul className="Search__suggestions">
            {suggestions.map((suggestion) => (
              <li key={suggestion.id}>
                <button
                  className="Search__suggestion-button"
                  type="button"
                  onClick={() => {
                    onSelect(suggestion)
                    onClose()
                  }}
                >
                  {suggestion.title}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Modal>
  )
}
