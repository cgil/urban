/**
*
* TestimonialsSection
*
*/

import React from 'react';
// import styled from 'styled-components';

import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Layout from 'material-ui/Layout';
import SectionHeader from '../SectionHeader';
import messages from './messages';
import DetailImage from '../DetailImage';
import personAImg from '../../static/img/personA.jpg';
import personBImg from '../../static/img/personB.jpg';
import personCImg from '../../static/img/personC.jpg';
import personDImg from '../../static/img/personD.jpg';


const styleSheet = createStyleSheet('TestimonialsSection', (theme) => ({
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

function TestimonialsSection(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div className={classes.root}>
      <SectionHeader headline={messages.headline} />
      <Layout container gutter={16}>
        <Layout item xs={12}>
          <Layout
            container
            className={classes.headline}
            align={'center'}
            direction={'row'}
            justify={'center'}
          >
            <Layout item xs={12} sm={3}>
              <DetailImage
                top={messages.personAName}
                image={personAImg}
                height={300}
                under={messages.personADescription}
              />
            </Layout>
            <Layout item xs={12} sm={3}>
              <DetailImage
                top={messages.personBName}
                image={personBImg}
                height={300}
                under={messages.personBDescription}
              />
            </Layout>
            <Layout item xs={12} sm={3}>
              <DetailImage
                top={messages.personCName}
                image={personCImg}
                height={300}
                under={messages.personCDescription}
              />
            </Layout>
            <Layout item xs={12} sm={3}>
              <DetailImage
                top={messages.personDName}
                image={personDImg}
                height={300}
                under={messages.personDDescription}
              />
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

TestimonialsSection.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};


TestimonialsSection.propTypes = {

};

export default TestimonialsSection;
