import React, { useEffect, useState } from 'react';

import { useLocalStorage } from '../../Hooks/useLocalStorage';
import { getLastWeekRepos } from '../../Helpers/common';
import RepoList from '../../components/Molecules/RepoList/RepoList';

function RepositoryList() {
  const [repositories, setRepositories] = useState([]);
  const [filteredRepositories, setFilteredRepositories] =
    useState(repositories);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getLastWeekRepos().then((data) => {
      setRepositories(data.items);
      setFilteredRepositories(data.items);
    });
  }, []);

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
        <RepoList repositories={filteredRepositories} />
      ) : (
        <p>No Repositories</p>
      )}
    </div>
  );
}

export default RepositoryList;
