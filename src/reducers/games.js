export default (state = null, { type, payload }) => {
  switch (type) {
    case 'GET_GAMES_SUCCEEDED': {
      if (payload.items) {
        return payload.items.map(({ fields }) => fields.gameText);
      }

      return state;
    }

    default:
      return state;
  }
};
