export const formatDate = (date) => {
  const dateObject = new Date(date);

  if (isNaN(dateObject)) return 'Invalid date';

  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(
    dateObject,
  );
  const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(
    dateObject,
  );
  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(
    dateObject,
  );

  return `${year}-${month}-${day}`;
};

export const getLastWeekDate = () => {
  const WEEK_DAYS = 7;
  const dateNow = new Date();
  const lastWeek = dateNow.setDate(dateNow.getDate() - WEEK_DAYS);

  return formatDate(lastWeek);
};

export const getLastWeekRepos = async () => {
  const lastWeekDate = getLastWeekDate();

  try {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=created:%3E${lastWeekDate}&sort=stars&order=desc`,
    );
    const repositories = await response.json();

    return repositories;
  } catch (error) {
    console.error(error);
  }
};

export const filterByLanguage = (dataList, inputFilter) => {
  const copyRepos = [...dataList];
  const filtered = copyRepos.filter((repo) => {
    return repo.language?.toLowerCase().includes(inputFilter);
  });

  return filtered;
};
