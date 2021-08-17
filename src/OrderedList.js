import { useState } from 'react'
import './style.css'

const OrderedList = () => {
  const [newItem, updateNewItem] = useState('')
  const [items, updateItems] = useState([])
  const [sortOrder, updateSortOrder] = useState(null)

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const newItems = [...items, newItem]
      updateItems(newItems)
      updateNewItem('')
    }
  }
  const sortList = () => {
    const newItems = [...items].sort()
    if (!sortOrder) {
      updateItems(newItems)
      updateSortOrder(1)
    } else {
      updateItems(newItems.reverse())
      updateSortOrder(0)
    }
  }
  const clearAll = () => {
    updateItems([])
    updateNewItem('')
  }

  return (
    <div className="ordered-list">
      <input onChange={e => updateNewItem(e.target.value)} onKeyPress={handleKeyPress} value={newItem} />
      <button className="btn" onClick={sortList}>{!sortOrder ? 'Up' : 'Down'}</button>
      <button className="btn" onClick={clearAll}>Clear</button>
      <ul>
        {items.length ? items.map((item, i) => (
          <li key={item + i}>{item}</li>
        )) : null}
      </ul>
    </div>
  )
}

export default OrderedList