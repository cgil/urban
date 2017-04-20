import { push } from 'react-router-redux';

/**
 * Dispatch to given route.
 */
export default function goTo(dispatch, route) {
  function go(evt) {
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
    return dispatch(push(route));
  }
  return (evt) => go(evt);
}
