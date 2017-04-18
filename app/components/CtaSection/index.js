/**
*
* CtaSection
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Layout from 'material-ui/Layout';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import messages from './messages';
import SectionHeader from '../SectionHeader';


const styleSheet = createStyleSheet('CtaSection', (theme) => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    flexGrow: 1,
    position: 'relative',
  }),
  paper: {
    'background-color': 'transparent',
  },
  button: {
    margin: theme.spacing.unit,
    height: 57,
    'min-width': 140,
    'font-size': 18,
    padding: '0 24px',
  },
}));

function CtaSection(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div className={classes.root}>
      <SectionHeader headline={messages.headline} marginBottom={15} />
      <Layout
        container
        gutter={16}
        align={'center'}
        direction={'column'}
        justify={'center'}
      >
        <Layout item xs={12}>
          <Paper elevation={0} square className={classes.paper}>
            <Button raised accent className={classes.button}>
              <FormattedMessage {...messages.button} />
            </Button>
          </Paper>
        </Layout>
      </Layout>
    </div>
  );
}

CtaSection.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

CtaSection.propTypes = {

};

export default CtaSection;
