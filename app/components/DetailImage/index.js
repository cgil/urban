/**
*
* DetailImage
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


const styleSheet = createStyleSheet('DetailImage', (theme) => ({
  root: theme.mixins.gutters({
    flexGrow: 1,
    position: 'relative',
  }),
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
  },
  divider: {
    'background-color': white,
    height: 2,
  },
}));

function DetailImage(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <Layout
      container
      align={'flex-start'}
      direction={'row'}
      justify={'center'}
      style={{ height: props.height + 100 }}
    >
      <Layout item xs={12}>
        <Paper elevation={0} square className={classes.backgroundImage} style={{ backgroundImage: `url(${props.image})`, height: props.height }}>
          <Layout
            container
            align={'center'}
            direction={'column'}
            justify={'center'}
            style={{ height: props.height }}
          >
            <Layout item>
              {props.top &&
                <Text type={'display3'} component={'h1'} align={'center'} className={classes.text}>
                  <FormattedMessage {...props.top} />
                </Text>
              }
              <Divider light className={classes.divider} />
              {props.bottom &&
                <Text type={'headline'} component={'h3'} align={'center'} secondary className={classes.text}>
                  <FormattedMessage {...props.bottom} />
                </Text>
              }
            </Layout>
          </Layout>
        </Paper>
      </Layout>
      {props.under &&
        <Layout item xs={12} style={{ height: 100 }}>
          <Text type={'body1'} component={'p'} align={'center'} secondary>
            <FormattedMessage {...props.under} />
          </Text>
        </Layout>
      }
    </Layout>
  );
}

DetailImage.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

DetailImage.propTypes = {
  top: PropTypes.object,
  bottom: PropTypes.object,
  under: PropTypes.object,
  image: PropTypes.string,
  height: PropTypes.number,
};

export default DetailImage;
