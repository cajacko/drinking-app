import { connect } from 'react-redux';
import App from 'components/App/App.render';

const mapStateToProps = ({ names, started }) => ({
  started: started && names && names.length > 0,
});

export default connect(mapStateToProps, undefined)(App);
