import React, { useState } from 'react'
import './addForm.css';

const AddForm = () => {
  const [inputValue, setInputValue] = useState({
    name: '',
    salary: ''
  })

  const onValueChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form
        className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Как его зовут?"
          name='name'
          value={inputValue.name}
          onChange={onValueChange}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?"
          name='salary'
          value={inputValue.salary}
          onChange={onValueChange}
        />

        <button type="submit"
          className="btn btn-outline-light">Добавить</button>
      </form>
    </div>
  )
}

export default AddForm
