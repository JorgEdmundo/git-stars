import {
  formatDate,
  getLastWeekDate,
  filterByLanguage,
  getLastWeekRepos,
} from './common';
import { mockRepositories } from './mockData';

describe('Test common functions', () => {
  describe('Function: formatDate(date)', () => {
    it('should return a formatted date', () => {
      const formattedDate = formatDate('2021-08-30T16:42:15Z');

      expect(formattedDate).toBe('2021-08-30');
    });

    it('should return a invalid date string on invalid inputs', () => {
      const formattedDate = formatDate(undefined);

      expect(formattedDate).toBe('Invalid date');
    });
  });

  describe('Function: getLastWeekDate()', () => {
    it('should last week date', () => {
      const dateNow = new Date();
      const lastWeek = formatDate(dateNow.setDate(dateNow.getDate() - 7));

      const lastWeekDate = getLastWeekDate();

      expect(lastWeekDate).toBe(lastWeek);
    });
  });

  describe('Function: filterByLanguage(dataList, inputFilter)', () => {
    it('should return a filtered list of repositories', () => {
      const filtered = filterByLanguage(mockRepositories, 'javascript');

      expect(filtered).toHaveLength(1);
    });

    it('should return no items for non-found languages', () => {
      const filtered = filterByLanguage(mockRepositories, 'C#');

      expect(filtered).toHaveLength(0);
    });
  });

  describe('Function: getLastWeekRepos()', () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ items: mockRepositories }),
      }),
    );

    beforeEach(() => {
      fetch.mockClear();
    });

    it('should return a list of repositories', async () => {
      const repositories = await getLastWeekRepos();

      expect(repositories.items).toEqual(mockRepositories);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
});
