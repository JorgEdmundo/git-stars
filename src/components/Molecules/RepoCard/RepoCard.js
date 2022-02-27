import React, { useState } from 'react';

// import { useLocalStorage } from '../../../Hooks/useLocalStorage';
import { formatDate } from '../../../Helpers/common';

import './repoCard.scss';

function RepoCard(props) {
  const {
    description,
    language,
    name,
    stargazers_count,
    html_url,
    updated_at,
    starRepository,
  } = props;

  // const [starredRepos, setStarredRepos] = useLocalStorage('starred', null);

  const addToStarList = () => {
    // const isRepoStarred = starredRepos.some((repo) => repo.id === id);
    // if (!isRepoStarred) {
    //   setStarredRepos({ ...props });
    // }
    starRepository(props);
  };

  return (
    <div>
      <div className="info">
        <h3>
          <a href={html_url} target="_blank">
            {name}
          </a>
        </h3>
        <p>{description}</p>
        <span>{language || 'No language'}</span>
        <span>Stars: {stargazers_count}</span>
        <span>Last update: {formatDate(updated_at)}</span>
      </div>
      <div className="actions">
        <button onClick={addToStarList}>Add to Star List</button>
      </div>
    </div>
  );
}

export default RepoCard;
