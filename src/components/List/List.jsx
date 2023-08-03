import React, { useContext } from 'react'
import Item from '../Item/Item'
import { MyContext } from '../../App'

const List = () => {
  const { worker, setWorker } = useContext(MyContext)

  const onDelete = (id) => {
    setWorker(
      worker.filter(em => em.id !== id)
    )
  }

  const onIncrease = (id) => {
    setWorker(
      worker.map((el) => (el.id === id ? { ...el, increase: !el.increase } : el))
    );
  };

  const onRise = (id) => {
    setWorker(
      worker.map((el) => (el.id === id ? { ...el, rise: !el.rise } : el))
    )
  }

  return (
    <ul className="app-list list-group">
      {worker?.map(emp => <Item onIncrease={onIncrease} onRise={onRise} onDelete={onDelete} key={emp.id} {...emp} />)}
    </ul>
  )
}

export default List
