export default (state = null, { type, payload }) => {
  switch (type) {
    case 'SET_GAMES_REQUESTED':
    case 'GET_GAMES_SUCCEEDED':
      return payload;

    default:
      return state;
  }
};
