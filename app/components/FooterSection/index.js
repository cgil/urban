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
import Text from 'material-ui/Text';


const styleSheet = createStyleSheet('FooterSection', (theme) => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    flexGrow: 1,
    position: 'relative',
    backgroundColor: theme.palette.primary[200],
    height: 190,
  }),
  container: {
    height: 150,
  },
  subFooter: {
    height: 20,
  },
  gutter: {
    paddingLeft: 40,
    paddingRight: 40,
  },
}));

function FooterSection(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div className={classes.root}>
      <Layout container gutter={16} className={classes.gutter}>
        <Layout item xs={12}>
          <Layout
            container
            align={'center'}
            direction={'row'}
            justify={'center'}
            className={classes.container}
          >
            <Layout item xs={6}>
              <Text type={'title'} component={'h3'} align={'left'}>
                Urban
              </Text>
            </Layout>
            <Layout item xs={6}>
            </Layout>
          </Layout>
        </Layout>
        <Layout item xs={12}>
          <Layout
            container
            align={'center'}
            direction={'row'}
            justify={'center'}
            className={classes.subFooter}
          >
            <Layout item xs={12}>
              <Text type={'caption'} component={'p'} align={'left'}>
                © 2017. All Rights Reserved.
              </Text>
            </Layout>
          </Layout>
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
