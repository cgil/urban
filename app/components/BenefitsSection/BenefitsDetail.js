/**
*
* BenefitsDetail
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


const styleSheet = createStyleSheet('BenefitsDetail', () => ({
  container: {
    height: 530,
  },
  transparent: {
    'background-color': 'transparent',
  },
  backgroundImage: {
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    'background-position': '50% 50%',
    height: 380,
    'min-width': '100%',
  },
  item: {
    'min-width': '100%',
  },
  feature: {
    height: 120,
  },
}));

function BenefitsDetail(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <Paper elevation={0} square className={classes.transparent}>
      <Layout
        container
        className={classes.container}
        align={'center'}
        direction={'column'}
        justify={'center'}
      >
        <Layout item className={classes.item}>
          <div className={classes.backgroundImage} style={{ backgroundImage: `url(${props.image})` }} ></div>
        </Layout>
        <Layout item className={classes.feature}>
          <Text type={'display1'} component={'h1'} align={'center'} gutterBottom>
            <FormattedMessage {...props.name} />
          </Text>
          <Text type={'subheading'} component={'h3'} align={'center'} secondary>
            <FormattedMessage {...props.address} />
          </Text>
        </Layout>
      </Layout>
    </Paper>
  );
}

BenefitsDetail.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

BenefitsDetail.propTypes = {
  name: PropTypes.object,
  address: PropTypes.object,
  image: PropTypes.string,
};

export default BenefitsDetail;
