import { useContext } from 'react';
import './search.css';
import { MyContext } from '../../App';

const Search = () => {
  const { search, setSearch } = useContext(MyContext)

  return (
    <input 
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      type="text"
      className="form-control search-input"
      placeholder="Найти сотрудника" />
  )
}

export default Search;
