import React, { useContext } from 'react'
import Item from '../Item/Item'
import { MyContext } from '../../App'

const List = () => {
  const { worker } = useContext(MyContext)

  return (
    <ul className="app-list list-group">
      {worker.map(emp => <Item key={emp.id} {...emp} />)}
    </ul>
  )
}

export default List
