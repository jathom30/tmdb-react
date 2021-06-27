import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTicketAlt, faTv, faUser } from '@fortawesome/free-solid-svg-icons'
import './Search.scss'
import { Text, Modal, FlexBox, Spacer } from 'Components'
import { useDebouncedCallback } from 'Hooks'
import { getSearchMulti } from 'Requests'
import { MovieType, MultiSearchType, TVType, PersonType } from 'Types'

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
        Search for a movie, TV show, or person
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
  const [suggestions, setSuggestions] = useState<MultiSearchType[]>()
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => inputRef.current?.focus(), [])

  const getLocationsDebounced = useDebouncedCallback(async (query: string) => {
    const results = await getSearchMulti(query)
    setSuggestions(results.data.results)
  }, 500)

  return (
    <Modal positionFromTop="6rem" offClick={onClose}>
      <div className="Search__model-content">
        <div className="Search__search">
          <FontAwesomeIcon icon={faSearch} className="Search__icon" />
          <input
            placeholder="Movie, TV, Person..."
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
                  {suggestion.media_type === 'movie' && (
                    <MovieSearchResult movie={suggestion} />
                  )}
                  {suggestion.media_type === 'tv' && (
                    <TVSearchResult tv={suggestion} />
                  )}
                  {suggestion.media_type === 'person' && (
                    <PersonSearchResult person={suggestion} />
                  )}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Modal>
  )
}

const MovieSearchResult: React.FC<{ movie: MovieType }> = ({ movie }) => {
  return (
    <FlexBox>
      <FontAwesomeIcon icon={faTicketAlt} />
      <Spacer width="0.5rem" />
      <Text on="white" weight="bold">{movie.title}</Text>
      <Spacer width="0.5rem" />
      <Text on="white">{movie.release_date}</Text>
    </FlexBox>
  )
}

const TVSearchResult: React.FC<{ tv: TVType }> = ({ tv }) => {
  return (
    <FlexBox>
      <FontAwesomeIcon icon={faTv} />
      <Spacer width="0.5rem" />
      <Text on="white" weight="bold">{tv.name}</Text>
      <Spacer width="0.5rem" />
      <Text on="white">{tv.first_air_date}</Text>
    </FlexBox>
  )
}

const PersonSearchResult: React.FC<{ person: PersonType }> = ({ person }) => {
  return (
    <FlexBox>
      <FontAwesomeIcon icon={faUser} />
      <Spacer width="0.5rem" />
      <Text on="white" weight="bold">{person.name}</Text>
      <Spacer width="0.5rem" />
      <Text on="white">{person.known_for_department}</Text>
    </FlexBox>
  )
}