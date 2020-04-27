export const setQuery = (name, value) => ({
  type: name.toUpperCase(),
  payload: value,
});

export const clearQuery = () => ({
  type: 'CLEAR',
});

export const setPage = (page) => ({
  type: 'PAGE',
  payload: page,
});
