import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState([])
  const [value, setValue] = useState('')

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2> Test Task </h2>
          <div className='underline'></div>

          <form className='Search'>
            <input
              className='inputs'
              placeholder=' Введите поисковое значение'
              onChange={(event) => console.log(event.target.value)}
            />
          </form>

        </div>
        <Categories />
        <Menu items={menuItems} />
      </section>

      <div className='buttons'>
        <button className='btn-1'>
          1
        </button>

        <button className='btn-2'>
          2
        </button>

        <button className='btn-3'>
          3
        </button>
      </div>
    </main>
  )
}

export default App;
