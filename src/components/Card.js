import React from 'react';

const Card = ({ name, email }) => {
  return(
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img style ={{ size: '50%' }} alt="robots" src={`https://robohash.org/${name}?100x100`}/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;