import React, { useContext, useState } from 'react'
import './addForm.css';
import { MyContext } from '../../App';

const AddForm = () => {
  const { worker, setWorker } = useContext(MyContext)
  console.log(worker);
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
  const addEmployee = (e) => {
    e.preventDefault()
    setWorker((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: inputValue.name,
        salary: inputValue.salary,
      },
    ]);
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

        <button
          onClick={addEmployee}
          type="submit"
          className="btn btn-outline-light">Добавить</button>
      </form>
    </div>
  )
}

export default AddForm
