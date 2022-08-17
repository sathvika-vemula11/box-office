import React from 'react';
import ShowsCard from './ShowsCard';
import { FlexGrid } from '../styled';
import imgNotFound from '../../images/not-found.png';

const ShowsGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ show }) => (
        <ShowsCard
          key={show.id}
          id={show.id}
          name={show.name}
          summary={show.summary}
          image={show.image ? show.image.medium : imgNotFound}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowsGrid;
