import React from 'react';

const Grid = (props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-6 justify-center">
      {props.children}
    </div>
  )
}

export default Grid;