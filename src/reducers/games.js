export default (state = null, { type, payload }) => {
  switch (type) {
    case 'GET_GAMES_SUCCEEDED': {
      if (payload.entries) {
        return payload.entries.map(({ fields }) => fields.gameText['en-GB']);
      }

      return state;
    }

    default:
      return state;
  }
};
