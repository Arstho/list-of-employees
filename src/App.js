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

  return (
    <div className="App">
      <MyContext.Provider value={{ worker, setWorker }}>
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
