export default (state = { show: false }, { type, payload }) => {
  switch (type) {
    case 'SHOW_GAMES_LIST':
      return payload;

    default:
      return state;
  }
};
