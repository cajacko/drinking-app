import { connect } from 'react-redux';
import GamesList from 'components/GamesList/GamesList.component';

const mapStateToProps = ({ games, showGamesList }) => ({
  games,
  scrollTo: showGamesList.index,
});

const mapDispatchToProps = dispatch => ({
  setGames: games => dispatch({ type: 'SET_GAMES_REQUESTED', payload: games }),
  back: () => dispatch({ type: 'SHOW_GAMES_LIST', payload: { show: false } }),
});

// Connect the component to redux via "connect".
export default connect(mapStateToProps, mapDispatchToProps)(GamesList);
