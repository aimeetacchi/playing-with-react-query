import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import Nav from 'components/nav';
import People from 'components/people';
import Planets from 'components/planets';
import { useState } from 'react';

// Create a client
const queryClient = new QueryClient()

function App() {
  const [page, setPage] = useState('planets');
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Nav setPage={setPage}/>
        <h1>Star Wars Info</h1>
        <div className="content">
          {page === 'planets' ? <Planets/> : <People/> }
        </div>
        
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;