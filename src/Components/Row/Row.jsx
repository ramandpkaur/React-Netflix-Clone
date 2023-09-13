import React from 'react'
import './Row.scss'

export const Card = ( { img } ) => {
  return (
    <img src={img} className='card' alt='cover' />
  )
}

const Row = ( { title, movies=[{img: 'https://collider.com/wp-content/uploads/amazing-spider-man-poster-movie.jpg'}] } ) => {

  const imgUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className='row'>
      <h3>{title}</h3>
      <div>
        {
          movies.map((item, index)=> (
            <Card key={index} img={ `${imgUrl}${item.poster_path}` } />
          ))
        }

      </div>
      
    </div>
  )
}

export default Row