import React from 'react';
import ShowsCard from './ShowsCard';
import imgNotFound from '../../images/not-found.png';

const ShowsGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ show }) => (
        <ShowsCard
          key={show.id}
          id={show.id}
          name={show.name}
          summary={show.summary}
          image={show.image ? show.image.medium : imgNotFound}
        />
      ))}
    </div>
  );
};

export default ShowsGrid;
