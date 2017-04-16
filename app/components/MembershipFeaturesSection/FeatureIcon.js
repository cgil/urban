/**
*
* FeatureIcon
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Text from 'material-ui/Text';
import Layout from 'material-ui/Layout';
import Paper from 'material-ui/Paper';
import Icon from 'material-ui/Icon';


const styleSheet = createStyleSheet('FeatureIcon', () => ({
  icon: {
    width: '100%',
    height: '100%',
  },
  transparent: {
    'background-color': 'transparent',
  },
}));

function FeatureIcon(props, context) {
  const classes = context.styleManager.render(styleSheet);
  const IconType = props.icon;

  return (
    <Paper elevation={0} square className={classes.transparent}>
      <Layout
        container
        align={'center'}
        direction={'row'}
        justify={'center'}
      >
        <Layout item xs={3}>
          <Icon accent>
            <IconType className={classes.icon} />
          </Icon>
        </Layout>
        <Layout item xs={9}>
          <Text type={'title'} component={'h1'} align={'left'} gutterBottom>
            <FormattedMessage {...props.name} />
          </Text>
          <Text type={'body1'} component={'h3'} align={'left'} secondary gutterBottom>
            <FormattedMessage {...props.description} />
          </Text>
        </Layout>
      </Layout>
    </Paper>
  );
}

FeatureIcon.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

FeatureIcon.propTypes = {
  name: PropTypes.object,
  description: PropTypes.object,
  icon: PropTypes.func,
};

export default FeatureIcon;
