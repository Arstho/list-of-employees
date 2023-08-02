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

  return (
    <ul className="app-list list-group">
      {worker?.map(emp => <Item onDelete={onDelete} key={emp.id} {...emp} />)}
    </ul>
  )
}

export default List
