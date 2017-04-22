/**
*
* CtaSection
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Layout from 'material-ui/Layout';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import SectionHeader from '../SectionHeader';


const styleSheet = createStyleSheet('CtaSection', (theme) => ({
  root: theme.mixins.gutters({
    paddingTop: 18,
    paddingBottom: 16,
    flexGrow: 1,
    position: 'relative',
  }),
  paper: {
    'background-color': 'transparent',
    marginBottom: 80,
  },
  button: {
    margin: theme.spacing.unit,
    height: 57,
    'font-size': 16,
    padding: '0 24px',
  },
}));

function CtaSection(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div className={classes.root}>
      <SectionHeader headline={props.headline} marginBottom={15} />
      <Layout
        container
        gutter={16}
        align={'center'}
        direction={'column'}
        justify={'center'}
      >
        <Layout item xs={12}>
          <Paper elevation={0} square className={classes.paper}>
            <Button raised accent className={classes.button} onClick={props.buttonRoute}>
              <FormattedMessage {...props.button} />
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
  headline: PropTypes.object.isRequired,
  button: PropTypes.object.isRequired,
  buttonRoute: PropTypes.func.isRequired,
};

export default CtaSection;
