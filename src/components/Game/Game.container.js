import { connect } from 'react-redux';
import Game from 'components/Game/Game.component';

const mapStateToProps = ({ games, names, fetchStatus }) => ({
  games,
  names,
  fetchStatus,
});

const mapDispatchToProps = dispatch => ({
  stop: () => dispatch({ type: 'STOP' }),
  showGamesList: gameIndex =>
    dispatch({
      type: 'SHOW_GAMES_LIST',
      payload: { show: true, index: gameIndex },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
