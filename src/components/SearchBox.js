import React from 'react';

const SearchBox = ({ onSearchChange }) => {
  return (
    <div>
      <input type="text" placeholder="Search by Robot Name" onChange={ onSearchChange }/>      
    </div>
  )

}

export default SearchBox;