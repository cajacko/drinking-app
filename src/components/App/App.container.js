import { connect } from 'react-redux';
import App from 'components/App/App.render';

const mapStateToProps = ({ names, started }) => ({
  started: started && names && names.length > 0,
});

const mapDispatchToProps = dispatch => ({
  getGames: () => dispatch({ type: 'GET_GAMES_REQUESTED' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
