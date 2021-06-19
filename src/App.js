import './App.css';
import api from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [repositories, setRepositories] = useState([])

  async function getRepositories() {
    const response = await api.get('https://api.github.com/users/akinncar/repos')
    setRepositories(response.data)
  }

  useEffect(() => {
    getRepositories()
  }, [])

  return (
    <div className="App">
      {repositories.map(repository => (
          <div key={repository.id}>
            <h3>{repository.name}</h3>
            <p>{repository.url}</p>
          </div>
        )
      )}
    </div>
  );
}

export default App;
