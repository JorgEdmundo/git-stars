import React, { useState } from 'react';

import RepoCard from '../RepoCard/RepoCard';
import { useLocalStorage } from '../../../Hooks/useLocalStorage';

import './repoList.scss';
import AddMessage from '../../Atoms/AddMessage/AddMessage';

function RepoList({ repositories, hasAction }) {
  const [starredRepos, setStarredRepos] = useLocalStorage('starred', []);
  const [showMessage, setShowMessage] = useState(false);

  const starRepository = (repository) => {
    const isRepoStarred = starredRepos.some(
      (starred) => starred.id === repository.id,
    );

    if (!isRepoStarred) {
      setStarredRepos([...starredRepos, repository]);
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 800);
    }
  };

  return (
    <div className="list-wrapper">
      {showMessage && <AddMessage />}
      {repositories.map((repo) => (
        <RepoCard
          key={repo.id}
          starRepository={starRepository}
          hasAction={hasAction}
          repository={repo}
        />
      ))}
    </div>
  );
}

export default RepoList;
