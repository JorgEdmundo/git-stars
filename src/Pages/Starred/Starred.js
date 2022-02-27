import React from 'react';

import { useLocalStorage } from '../../Hooks/useLocalStorage';

function Starred() {
  const [starredRepos] = useLocalStorage('starred');
  console.log(starredRepos);
  return (
    <div>
      <p>Starred data</p>
    </div>
  );
}

export default Starred;
