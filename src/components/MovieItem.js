import React from 'react';

const MovieItem = ({ item }) => (
    <li className="list-group-item">
      <div key={item.imdbID}>{item.Title}</div>
    </li>
);

export default MovieItem;