import React from 'react'
import Item from '../Item/Item'

const List = ({ date }) => {
  return (
    <ul className="app-list list-group">
      {date.map(emp => <Item key={emp.id} {...emp}/>)}
    </ul>
  )
}

export default List
