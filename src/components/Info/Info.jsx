import React, { useContext } from 'react'
import './info.css'
import { MyContext } from '../../App'

const Info = () => {
  const { worker } = useContext(MyContext)
const increased = worker.filter(em => em.increase === true)
  return (
    <div className='app-info'>
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {worker.length}</h2>
      <h2>Премию получат: {increased.length}</h2>
    </div>
  )
}

export default Info
