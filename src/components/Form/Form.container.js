import { connect } from 'react-redux';
import Form from 'components/Form/Form.component';

const mapStateToProps = ({ names }) => ({ names });

const mapDispatchToProps = dispatch => ({
  start: names => dispatch({ type: 'START', payload: names }),
  goToGames: () =>
    dispatch({ type: 'SHOW_GAMES_LIST', payload: { show: true } }),
});

// Connect the component to redux via "connect".
export default connect(mapStateToProps, mapDispatchToProps)(Form);
