import { connect } from 'react-redux';
import Form from 'components/Form/Form.component';

const mapDispatchToProps = dispatch => ({
  start: names => dispatch({ type: 'START', payload: names }),
});

// Connect the component to redux via "connect".
export default connect(undefined, mapDispatchToProps)(Form);
