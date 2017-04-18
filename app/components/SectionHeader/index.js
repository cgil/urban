/**
*
* SectionHeader
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Layout from 'material-ui/Layout';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Text';

const styleSheet = createStyleSheet('SectionHeader', () => ({
  headline: {
    height: 300,
  },
  transparent: {
    'background-color': 'transparent',
  },
}));

function SectionHeader(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <Layout
      container
      gutter={16}
      style={{ marginTop: props.marginTop, marginBottom: props.marginBottom }}
      align={'center'}
      direction={'row'}
      justify={'center'}
    >
      <Layout item xs>
        <Paper elevation={0} square className={classes.transparent}>
          <Text type={'display2'} component={'h1'} align={'center'} gutterBottom>
            <FormattedMessage {...props.headline} />
          </Text>
          {props.slogan &&
            <Text type={'subheading'} component={'h3'} align={'center'} secondary gutterBottom>
              <FormattedMessage {...props.slogan} />
            </Text>
          }
        </Paper>
      </Layout>
    </Layout>
  );
}

SectionHeader.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

SectionHeader.propTypes = {
  headline: PropTypes.object,
  slogan: PropTypes.object,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
};

SectionHeader.defaultProps = {
  marginTop: 120,
  marginBottom: 120,
};

export default SectionHeader;
