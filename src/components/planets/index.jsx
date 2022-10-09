import { useQuery } from '@tanstack/react-query'
import Planet from 'components/planet';
import { useState } from 'react';
import PlanetsStyles from './styles';



const Planets = () => {
  const [page, setPage] = useState(1)

  const fetchPlanets = async (page = 1) => {
    console.log('calling..', page)
    const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`)
    return res.json();
  }

  const {
    isLoading,
    isError,
    error,
    data,
    isPreviousData,
  }  = useQuery(['planets', page], () => fetchPlanets(page), { 
    keepPreviousData : true,
    staleTime: 10000,
  })
 
  console.log('data', data)

  return (
    <PlanetsStyles>
      <h2>Planets</h2>
      { isLoading ? (<p>Loading...</p>)
      : isError ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="planet__container">
          {data && data.results.map((planet) => (
            <Planet key={planet.name} planet={planet}/>
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
    </PlanetsStyles>
  )
}

export default Planets