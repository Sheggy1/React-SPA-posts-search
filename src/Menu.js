import React from 'react';

const Menu = ({ items }) => {

  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, img, title, } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='post-info'>
              <h4 className='post-info-title'>{title} </h4>
            </div>
          </article>
        );
      })}
    </div>
  )
};

export default Menu;
