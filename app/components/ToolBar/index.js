/**
*
* ToolBar - The Header with navigation.
*
*/

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Text';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import goTo from '../../utils/goTo';
// import styled from 'styled-components';


const styleSheet = createStyleSheet('ToolBar', (theme) => ({
  root: {
    position: 'relative',
    width: '100%',
  },
  appBar: {
    position: 'relative',
    'box-shadow': 'none',
  },
  toolBar: {
    height: 70,
  },
  flex: {
    flex: 1,
  },
  button: {
    margin: theme.spacing.unit,
    marginLeft: 'auto',
    height: 57,
    'font-size': 16,
    padding: '0 24px',
  },
  homeButton: {
    textTransform: 'none',
  },
}));

function ToolBar(props, context) {
  const classes = context.styleManager.render(styleSheet);
  const homeButtonRoute = goTo(props.dispatch, '/');
  const buttons = props.buttons.map((button) =>
    <Button raised accent className={classes.button} key={button.name.id} onClick={button.route}>
      <FormattedMessage {...button.name} />
    </Button>
  );

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton contrast>
            <MenuIcon />
          </IconButton>
          <Button contrast onClick={homeButtonRoute} className={classes.homeButton}>
            <Text type="title" colorInherit className={classes.flex}>Urban</Text>
          </Button>
          { buttons }
        </Toolbar>
      </AppBar>
    </div>
  );
}

ToolBar.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

ToolBar.defaultProps = {
  buttons: [],
};

ToolBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  buttons: PropTypes.array,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ToolBar);
