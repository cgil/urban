/**
*
* HomesSection
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { createStyleSheet } from 'jss-theme-reactor';
import { white } from 'material-ui/styles/colors';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Text from 'material-ui/Text';
import Layout from 'material-ui/Layout';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';


const styleSheet = createStyleSheet('Detail', (theme) => ({
  root: theme.mixins.gutters({
    flexGrow: 1,
    position: 'relative',
  }),
  item: {
    height: '100%',
  },
  photos: {
    height: 400,
  },
  text: {
    color: 'white',
    'text-shadow': '1px 1px 2px rgba(0,0,0,0.5)',
  },
  transparent: {
    'background-color': 'transparent',
  },
  backgroundImage: {
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    'background-position': '50% 50%',
    height: 380,
  },
  divider: {
    'background-color': white,
    height: 2,
  },
}));

function Detail(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <Paper elevation={0} square className={classes.backgroundImage} style={{ 'background-image': `url(${props.image})` }}>
      <Layout
        container
        className={classes.photos}
        align={'center'}
        direction={'column'}
        justify={'center'}
      >
        <Layout item>
          <Text type={'display3'} component={'h1'} align={'center'} className={classes.text}>
            <FormattedMessage {...props.name} />
          </Text>
          <Divider light className={classes.divider} />
          <Text type={'headline'} component={'h3'} align={'center'} secondary className={classes.text}>
            <FormattedMessage {...props.address} />
          </Text>
        </Layout>
      </Layout>
    </Paper>
  );
}

Detail.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

Detail.propTypes = {
  name: PropTypes.object,
  address: PropTypes.object,
  image: PropTypes.string,
};

export default Detail;
