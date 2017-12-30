export default (state = null, { type, payload }) => {
  switch (type) {
    case 'SHOW_GAMES_LIST':
      return payload;

    default:
      return state;
  }
};
