/**
*
* FeaturesSection
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Layout from 'material-ui/Layout';
import FeatureIcon from './FeatureIcon';
import SectionHeader from '../SectionHeader';


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
  const features = props.features.map((feature) =>
    <Layout item xs={12} sm={4} key={feature.name.id}>
      <FeatureIcon
        name={feature.name}
        description={feature.description}
        icon={feature.icon}
      />
    </Layout>
  );
  return (
    <div className={classes.root}>
      <SectionHeader headline={props.headline} slogan={props.slogan} />
      <Layout container gutter={16}>
        <Layout item xs={12}>
          <Layout
            container
            align={'center'}
            direction={'row'}
            justify={'center'}
          >
            {features}
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
  features: PropTypes.array.isRequired,
  headline: PropTypes.object,
  slogan: PropTypes.object,
};

export default FeaturesSection;
