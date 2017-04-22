/*
 *
 * ApplicationPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ToolBar from '../../components/ToolBar';
import makeSelectApplicationPage from './selectors';
import messages from './messages';
import goTo from '../../utils/goTo';

export class ApplicationPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const toolbarButtons = [
      { name: messages.ownerInfoButton, route: goTo(this.props.dispatch, '/partners') },
    ];

    return (
      <div>
        <ToolBar buttons={toolbarButtons} />
      </div>
    );
  }
}

ApplicationPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ApplicationPage: makeSelectApplicationPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationPage);
