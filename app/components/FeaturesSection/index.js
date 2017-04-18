/**
*
* FeaturesSection
*
*/

import React from 'react';
// import styled from 'styled-components';

import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Layout from 'material-ui/Layout';
import FeaturesDetail from './FeaturesDetail';
import messages from './messages';
import SectionHeader from '../SectionHeader';
import cookingImg from '../../static/img/cooking.jpg';
import guitarImg from '../../static/img/guitar.jpg';


const styleSheet = createStyleSheet('FeaturesSection', (theme) => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    flexGrow: 1,
    position: 'relative',
  }),
}));

function FeaturesSection(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div className={classes.root}>
      <SectionHeader headline={messages.headline} />
      <Layout container gutter={16}>
        <Layout item xs={12}>
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
                image={cookingImg}
              />
            </Layout>
            <Layout item xs>
              <FeaturesDetail
                name={messages.communityName}
                address={messages.communityDescription}
                image={guitarImg}
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
