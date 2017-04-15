/**
*
* FeaturesSection
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Text from 'material-ui/Text';
import Layout from 'material-ui/Layout';
import Paper from 'material-ui/Paper';
import FeaturesDetail from './FeaturesDetail';
import messages from './messages';
import kitchenImg from '../../static/img/kitchen.jpg';
import livingImg from '../../static/img/living.jpg';


const styleSheet = createStyleSheet('FeaturesSection', (theme) => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    flexGrow: 1,
    position: 'relative',
  }),
  headline: {
    height: 250,
  },
  white: {
    color: 'white',
  },
  transparent: {
    'background-color': 'transparent',
  },
}));

function FeaturesSection(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div className={classes.root}>
      <Layout container gutter={16}>
        <Layout item xs={12}>
          <Layout
            container
            className={classes.headline}
            align={'center'}
            direction={'row'}
            justify={'center'}
          >
            <Layout item xs>
              <Paper elevation={0} square className={classes.transparent}>
                <Text type={'display3'} component={'h1'} align={'center'} gutterBottom>
                  <FormattedMessage {...messages.headline} />
                </Text>
              </Paper>
            </Layout>
          </Layout>
          <Layout
            container
            align={'center'}
            direction={'row'}
            justify={'center'}
          >
            <Layout item xs>
              <FeaturesDetail
                name={messages.convenienceName}
                address={messages.convenienceDescription}
                image={kitchenImg}
              />
            </Layout>
            <Layout item xs>
              <FeaturesDetail
                name={messages.communityName}
                address={messages.communityDescription}
                image={livingImg}
              />
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

FeaturesSection.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

FeaturesSection.propTypes = {

};

export default FeaturesSection;
