import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ list }) => (
    <ul className="list-group">
      {list.map(item => (
        <MovieItem key={item.imdbID} item={item} />
      ))}
    </ul>
  );

export default MovieList;


   
