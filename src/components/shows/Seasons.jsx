import React from 'react';
import { SeasonList, SeasonsWrapper } from './Seasons.styled';

const Seasons = ({ seasons }) => {
  return (
    <SeasonsWrapper>
      <p>
        Seasons in total:{' '}
        <span style={{ fontWeight: 'bold' }}>{seasons.length}</span>
      </p>
      <p>
        Episodes in total:{' '}
        <span style={{ fontWeight: 'bold' }}>
          {seasons.reduce((acc, season) => acc + season.episodeOrder, 0)}
        </span>
      </p>
      <SeasonList>
        {seasons.map(season => (
          <div key={season.id}>
            <div className="season-item">
              <p className="left">Season {season.number}</p>
              <p className="right">
                Episodes: <span>{season.episodeOrder}</span>
              </p>
            </div>
            <div>
              Aired:{' '}
              <span>
                {season.premiereDate} - {season.endDate}
              </span>
            </div>
          </div>
        ))}
      </SeasonList>
    </SeasonsWrapper>
  );
};

export default Seasons;
