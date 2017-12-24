export default (state = null, { type }) => {
  if (type.includes('GET_GAMES_')) return type.replace('GET_GAMES_', '');

  return state;
};
