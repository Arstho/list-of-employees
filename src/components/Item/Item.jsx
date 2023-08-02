import { useState } from 'react';
import './item.css';

const Item = ({ name, salary }) => {
  const [increase, setIncrease] = useState(false)
  const [like, setLike] = useState(false)

  const onIncrease = () => setIncrease((increase) => increase = !increase)

  const onLike = () => setLike((like) => like = !like)
  
  let classNames = "list-group-item d-flex justify-content-between";
  
  if (increase) {
      classNames += ' increase';
  }
  if (like) {
      classNames += ' like';
  }

  return (
    <li className={classNames}>
      <span onClick={onLike} className="list-group-item-label">{name}</span>
      <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
      <div className='d-flex justify-content-center align-items-center'>
        <button
          onClick={onIncrease}
          type="button"
          className="btn-cookie btn-sm ">
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button"
          className="btn-trash btn-sm ">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  )
}

export default Item;