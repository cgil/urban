/**
*
* FooterSection
*
*/

import React from 'react';
// import styled from 'styled-components';

import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Layout from 'material-ui/Layout';


const styleSheet = createStyleSheet('FooterSection', (theme) => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    flexGrow: 1,
    position: 'relative',
    height: 200,
    backgroundColor: theme.palette.primary[200],
  }),
}));

function FooterSection(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div className={classes.root}>
      <Layout
        container
        gutter={16}
        align={'center'}
        direction={'column'}
        justify={'center'}
      >
        <Layout item xs={12}>
        </Layout>
      </Layout>
    </div>
  );
}

FooterSection.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

FooterSection.propTypes = {

};

export default FooterSection;
