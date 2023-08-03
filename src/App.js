import { createContext, useState } from 'react';
import './App.css';
import AddForm from './components/AddForm/AddForm';
import Filter from './components/Filter/Filter';
import Info from './components/Info/Info';
import List from './components/List/List';
import Search from './components/Search/Search';

export const MyContext = createContext(undefined)

function App() {
  const [worker, setWorker] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')

  function filterPost(data) {
    switch (filter) {
      case 'rise':
        return data.filter(item => item.rise)
      case 'moreThen1000':
        return data.filter(item => item.salary >= 1000)
      default:
        return data
    }
  }

  const visible = filterPost(worker.filter(em => em.name.toLowerCase().includes(search.trim().toLowerCase())))

  return (
    <div className="App">
      <MyContext.Provider value={{ worker, setWorker, search, setSearch, visible, setFilter, filter }}>
        <Info />
        <div className="search-panel">
          <Search />
          <Filter />
        </div>
        <List />
        <AddForm />
      </MyContext.Provider>
    </div>
  );
}

export default App;
