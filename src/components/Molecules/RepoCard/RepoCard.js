import React from 'react';

import { formatDate } from '../../../Helpers/common';
import Button from '../../Atoms/Button/Button';

import './repoCard.scss';

function RepoCard(props) {
  const { repository, starRepository, hasAction } = props;

  const {
    description,
    language,
    name,
    stargazers_count,
    html_url,
    updated_at,
  } = repository;

  const addToStarList = () => {
    starRepository(repository);
  };

  return (
    <div className="card-wrapper">
      <div className="info">
        <h3>
          <a href={html_url} target="_blank">
            {name}
          </a>
        </h3>
        <p>{description}</p>
        <div className="chips">
          <span>{language || 'No language defined'}</span>
          <span>Stars: {stargazers_count}</span>
          <span>Last updated: {formatDate(updated_at)}</span>
        </div>
      </div>
      {hasAction && (
        <div className="actions">
          <Button handleClick={addToStarList}>Add to Star List</Button>
        </div>
      )}
    </div>
  );
}

export default RepoCard;
