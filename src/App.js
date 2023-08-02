import './App.css';
import AddForm from './components/AddForm/AddForm';
import Filter from './components/Filter/Filter';
import Info from './components/Info/Info';
import List from './components/List/List';
import Search from './components/Search/Search';

function App() {
  const date = [
    { name: 'Jonh', salary: 800, id: 1 },
    { name: 'Mike', salary: 1000, id: 2 },
    { name: 'Carl', salary: 1200, id: 3 },
  ]
  return (
    <div className="App">
      <Info />
      <div className="search-panel">
        <Search />
        <Filter />
      </div>
      <List date={date} />
      <AddForm />
    </div>
  );
}

export default App;
