import { useContext } from "react";
import "./filter.css";
import { MyContext } from "../../App";

const Filter = () => {
  const { setFilter, filter } = useContext(MyContext)

  const buttonsData = [
    { name: 'all', label: 'Все сотрудники' },
    { name: 'rise', label: 'На повышение' },
    { name: 'moreThen1000', label: 'З/П больше 1000$' },
  ]

  const buttons = buttonsData.map((button) => {
    const active = filter === button.name
    const clazz = active ? 'btn-light' : 'btn-outline-light'
    return (
      <button
        key={button.name}
        type="button"
        className={`btn ${clazz}`}
        onClick={() => setFilter(button.name)}>
        {button.label}
      </button>
    )
  })

  return (
    <div className="btn-group">
      {buttons}
    </div>
  )
}

export default Filter;