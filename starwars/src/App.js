import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import CharacterList from './components/CharacterList'
import { Container } from './components/styles'

const App = () => {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(res => {
        setData(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })

  }, [page])
  // console.log(data)
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1>Rick and Morty Project!</h1>
      <Container justify= {'space-evenly'} >
        {page > 1 && <button onClick ={() => setPage(page - 1)}>Prev Page</button>}
        <button onClick ={() => setPage(page + 1)}>Next Page</button>
      </Container>
      <Container direction={'column'}>
        <CharacterList character={data} />
      </Container>
    </div>
  );
}

export default App;
