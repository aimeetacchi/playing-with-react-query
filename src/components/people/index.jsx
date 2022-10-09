import { useQuery } from '@tanstack/react-query'
import Person from 'components/person';
import { useState } from 'react';
import PeopleStyles from './styles';



const People = () => {
  const [page, setPage] = useState(1)

  const fetchPeople = async (page = 1) => {
    console.log('calling..', page)
    const res = await fetch(`https://swapi.dev/api/people/?page=${page}`)
    return res.json();
  }

  const {
    isLoading,
    isError,
    error,
    data,
    isPreviousData,
  }  = useQuery(['People', page], () => fetchPeople(page), { 
    keepPreviousData : true,
    staleTime: 10000,
  })
 
  return (
    <PeopleStyles>
      <h2>People</h2>
      { isLoading ? (<p>Loading...</p>)
      : isError ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="people__container">
          {data && data.results.map((person) => (
            <Person key={person.name} person={person}/>
          ))}
        </div>
      )}
      <span>Current Page: {page}</span>
      <div className="button-container">
        <button
          onClick={() => setPage(old => Math.max(old - 1, 0))}
          disabled={page === 1}
        >
          Previous Page
        </button>{' '}
        <button
          onClick={() => {
            if (!isPreviousData && data.next) {
              setPage(old => old + 1)
            }
          }}
          // Disable the Next Page button until we know a next page is available
          disabled={isPreviousData || !data?.next}
        >
          Next Page
        </button>
      </div>
    </PeopleStyles>
  )
}

export default People