/**
*
* ToolBar - The Header with navigation.
*
*/

import React from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Text';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
// import styled from 'styled-components';


const styleSheet = createStyleSheet('ToolBar', () => ({
  root: {
    position: 'relative',
    marginTop: 30,
    width: '100%',
  },
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
}));

function ToolBar(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton contrast>
            <MenuIcon />
          </IconButton>
          <Text type="title" colorInherit className={classes.flex}>Title</Text>
          <Button contrast>Login</Button>
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
