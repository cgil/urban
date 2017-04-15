/**
*
* HomesSection
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
import Detail from './Detail';
import messages from './messages';
import bedroomImg from '../../static/img/bedroom.jpg';
import livingImg from '../../static/img/living.jpg';


const styleSheet = createStyleSheet('HomesSection', (theme) => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    flexGrow: 1,
    height: 672,
    position: 'relative',
  }),
  item: {
    height: '100%',
  },
  headline: {
    height: 250,
  },
  photos: {
    height: 400,
  },
  white: {
    color: 'white',
  },
  transparent: {
    'background-color': 'transparent',
  },
}));

function HomesSection(props, context) {
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
                <Text type={'headline'} component={'h3'} align={'center'} secondary>
                  <FormattedMessage {...messages.nyc} />
                </Text>
              </Paper>
            </Layout>
          </Layout>
          <Layout
            container
            className={classes.photos}
            align={'center'}
            direction={'row'}
            justify={'center'}
          >
            <Layout item xs>
              <Detail
                name={messages.crownHeightsName}
                address={messages.crownHeightsAddress}
                image={bedroomImg}
              />
            </Layout>
            <Layout item xs>
              <Detail
                name={messages.havemayerName}
                address={messages.havemayerAddress}
                image={livingImg}
              />
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

HomesSection.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

HomesSection.propTypes = {

};

export default HomesSection;
