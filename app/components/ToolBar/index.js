/**
*
* ToolBar - The Header with navigation.
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Text';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import messages from './messages';
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
    height: 57,
    'font-size': 16,
    padding: '0 24px',
  },
}));

function ToolBar(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton contrast>
            <MenuIcon />
          </IconButton>
          <Text type="title" colorInherit className={classes.flex}>Urban</Text>
          <Button raised accent className={classes.button}>
            <FormattedMessage {...messages.ownerInfoButton} />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ToolBar.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

ToolBar.propTypes = {
};

export default ToolBar;
