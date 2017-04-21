/**
*
* BannerSection
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { createStyleSheet } from 'jss-theme-reactor';
import { white } from 'material-ui/styles/colors';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Text from 'material-ui/Text';
import Button from 'material-ui/Button';
import Layout from 'material-ui/Layout';
import Paper from 'material-ui/Paper';


const styleSheet = createStyleSheet('BannerSection', (theme) => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    flexGrow: 1,
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    'background-position': '50% 50%',
    height: 672,
    position: 'relative',
  }),
  container: {
    flexGrow: 1,
    height: '100%',
  },
  item: {
    height: '100%',
  },
  button: {
    margin: theme.spacing.unit,
    height: 57,
    'font-size': 16,
    padding: '0 24px',
  },
  paper: {
    'background-color': 'transparent',
  },
  text: {
    color: white,
    'text-shadow': '1px 1px 2px rgba(0,0,0,0.5)',
  },
}));

function BannerSection(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div className={classes.root} style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      <Layout container gutter={16} className={classes.container}>
        <Layout item xs={12}>
          <Layout
            container
            className={classes.item}
            align={'center'}
            direction={'column'}
            justify={'center'}
          >
            <Layout item>
              <Paper elevation={0} square className={classes.paper}>
                <Text type={'display3'} component={'h1'} align={'center'} className={classes.text}>
                  {props.headline &&
                    <FormattedMessage {...props.headline} />
                  }
                </Text>
                <Text type={'display1'} component={'h3'} align={'center'} className={classes.text}>
                  {props.slogan &&
                    <FormattedMessage {...props.slogan} />
                  }
                </Text>
              </Paper>
            </Layout>
            <Layout item>
              {props.button &&
                <Paper elevation={0} square className={classes.paper}>
                  <Button raised accent className={classes.button}>
                    <FormattedMessage {...props.button} />
                  </Button>
                </Paper>
              }
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

BannerSection.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

BannerSection.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  headline: PropTypes.object,
  slogan: PropTypes.object,
  button: PropTypes.object,
};

export default BannerSection;
