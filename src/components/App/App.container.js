/**
 * This file is only responsible for connecting the component to the redux
 * store. The component should not be able to access the store or router from
 * any other file.
 *
 * TODO: EXPLAIN CUSTOM BEHAVIOUR HERE
 *
 * This file can:
 * - Passes props from the redux store to the component
 * - Passes functions as props to the component which dispatch actions
 */

import { connect } from 'react-redux';
import App from 'components/App/App.component';

/**
 * Get props from the redux store, transform/make use of them and then return
 * an object that will be passed as merged props to the component.
 *
 * TODO: EXPLAIN CUSTOM BEHAVIOUR HERE
 *
 * @param  {Object} state The redux state from the store
 * @param  {Object} props The props passed to the component
 * @return {Object}       Additional props to pass and merge with the component
 */
const mapStateToProps = ({ propFromStore }, { propPassedToComponent }) => {
  // Transform props from the store here as necessary
  const propToPass = propFromStore && propFromStore[propPassedToComponent];

  return {
    propToPass,
  };
};

/**
 * Pass functions as props to the component, which can dispatch actions to the
 * redux store.
 *
 * TODO: EXPLAIN CUSTOM BEHAVIOUR HERE
 *
 * @param  {Function} dispatch The redux dispatch function
 * @param  {Object}   props    The props passed to the component
 * @return {Object}            Additional props to pass and merge with the
 *                             component
 */
const mapDispatchToProps = (dispatch, { propPassedToComponent }) => ({
  action: () => dispatch({ type: 'GET_NEXT_PHOTOS_REQUESTED' }),
});

// Connect the component to redux via "connect".
export default connect(mapStateToProps, mapDispatchToProps)(App);
