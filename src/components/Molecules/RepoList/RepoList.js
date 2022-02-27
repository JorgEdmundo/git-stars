import React from 'react';

import RepoCard from '../RepoCard/RepoCard';

import { useLocalStorage } from '../../../Hooks/useLocalStorage';

function RepoList({ repositories }) {
  const [starredRepos, setStarredRepos] = useLocalStorage('starred', []);

  const starRepository = (repository) => {
    const isRepoStarred = starredRepos.some(
      (starred) => starred.id === repository.id,
    );
    if (!isRepoStarred) {
      setStarredRepos([...starredRepos, repository]);
    }
  };

  return (
    <>
      {repositories.map((repo) => (
        <RepoCard key={repo.id} {...repo} starRepository={starRepository} />
      ))}
    </>
  );
}

export default RepoList;
