    import React from 'react';
    import './ModuleCard.css';

export function ModuleCard(props) {
  const { image, lecturer, timing, name, link } = props; // object desctructing

  return (
    <div className='moduleCard'>
      <img
        className='moduleCard__image'
        src={image}
        alt='Module description'
      />
      <div className='NameTime'>
        <span>{lecturer}</span>
        <span>{timing} min</span>
      </div>
  <h3 className='ModulName'>{name}</h3>
      <a type="button" class="btn btn-primary" href={link}>Learn more</a>
    </div>
  );
}