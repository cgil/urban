/**
*
* Banner
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { createStyleSheet } from 'jss-theme-reactor';
import { white } from 'material-ui/styles/colors';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Text from 'material-ui/Text';
import Button from 'material-ui/Button';
import Layout from 'material-ui/Layout';
import messages from './messages';
import banner from '../../static/img/banner.jpg';


const styleSheet = createStyleSheet('Banner', (theme) => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    flexGrow: 1,
    'background-image': `url(${banner})`,
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    'background-position': '50% 50%',
    height: 672,
    position: 'relative',
  }),
  layout: {
    flexGrow: 1,
    position: 'relative',
    height: '100%',
  },
  item: {
    height: '90%',
  },
  button: {
    margin: theme.spacing.unit,
    height: 57,
    'min-width': 140,
    'font-size': 18,
    padding: '0 24px',
  },
  text: {
    color: white,
  },
}));

function Banner(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div className={classes.root}>
      <Layout container className={classes.layout} gutter={16}>
        <Layout item xs={12}>
          <Layout
            container
            className={classes.item}
            align={'center'}
            direction={'column'}
            justify={'center'}
          >
            <Layout item>
              <Text type={'display3'} component={'h1'} align={'center'} className={classes.text}>
                <FormattedMessage {...messages.headline} />
              </Text>
              <Text type={'display1'} component={'h3'} align={'center'} className={classes.text}>
                <FormattedMessage {...messages.slogan} />
              </Text>
            </Layout>
            <Layout item>
              <Button raised accent className={classes.button}>Learn More</Button>
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

Banner.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

Banner.propTypes = {
};

export default Banner;
