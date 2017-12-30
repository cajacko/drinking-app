import { connect } from 'react-redux';
import App from 'components/App/App.render';

const mapStateToProps = ({ names, started, games }) => ({
  started: started && names && names.length > 0,
  games,
});

const mapDispatchToProps = dispatch => ({
  getGames: () => dispatch({ type: 'GET_GAMES_REQUESTED' }),
  setGames: games => dispatch({ type: 'SET_GAMES_REQUESTED', payload: games }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
