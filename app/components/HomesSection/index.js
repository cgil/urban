/**
*
* HomesSection
*
*/

import React from 'react';
// import styled from 'styled-components';

import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Layout from 'material-ui/Layout';
import messages from './messages';
import DetailImage from '../DetailImage';
import SectionHeader from '../SectionHeader';
import bedroomImg from '../../static/img/bedroom.jpg';
import livingImg from '../../static/img/living.jpg';


const styleSheet = createStyleSheet('HomesSection', (theme) => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    flexGrow: 1,
    position: 'relative',
  }),
  headline: {
    height: 350,
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
      <SectionHeader headline={messages.headline} slogan={messages.nyc} />
      <Layout container gutter={16}>
        <Layout item xs={12}>
          <Layout
            container
            align={'center'}
            direction={'row'}
            justify={'center'}
          >
            <Layout item xs>
              <DetailImage
                top={messages.crownHeightsName}
                bottom={messages.crownHeightsAddress}
                image={bedroomImg}
                height={380}
              />
            </Layout>
            <Layout item xs>
              <DetailImage
                top={messages.havemayerName}
                bottom={messages.havemayerAddress}
                image={livingImg}
                height={380}
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
