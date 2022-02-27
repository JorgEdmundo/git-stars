import React, { useEffect, useState } from 'react';
import RepoCard from '../../components/Molecules/RepoCard/RepoCard';

import { useLocalStorage } from '../../Hooks/useLocalStorage';
import { getLastWeekRepos } from '../../Helpers/common';

function RepositoryList() {
  const [repositories, setRepositories] = useState([]);
  const [filteredRepositories, setFilteredRepositories] =
    useState(repositories);
  const [filter, setFilter] = useState('');
  const [starredRepos, setStarredRepos] = useLocalStorage('starred', []);

  useEffect(() => {
    getLastWeekRepos().then((data) => {
      setRepositories(data.items);
      setFilteredRepositories(data.items);
    });
  }, []);

  const starRepository = (repository) => {
    const isRepoStarred = starredRepos.some(
      (starred) => starred.id === repository.id,
    );
    if (!isRepoStarred) {
      setStarredRepos([...starredRepos, repository]);
    }
  };

  const filterByLanguage = (e) => {
    const inputFilter = e.target.value;
    const filtered = filteredRepositories.filter((repo) =>
      repo.language?.toLowerCase().includes(inputFilter),
    );

    setFilter(inputFilter);
    setFilteredRepositories(filtered);

    if (!inputFilter) setFilteredRepositories(repositories);
  };

  return (
    <div>
      <h2>RepositoryList</h2>
      <div>
        <span>Filter</span>
        <input value={filter} onChange={filterByLanguage} />
      </div>
      {filteredRepositories.length ? (
        <>
          {filteredRepositories.map((repo) => (
            <RepoCard key={repo.id} {...repo} starRepository={starRepository} />
          ))}
        </>
      ) : (
        <p>No Repos</p>
      )}
    </div>
  );
}

export default RepositoryList;
