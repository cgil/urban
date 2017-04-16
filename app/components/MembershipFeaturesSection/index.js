/**
*
* MembershipFeaturesSection
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Text from 'material-ui/Text';
import Layout from 'material-ui/Layout';
import Paper from 'material-ui/Paper';
import AirlineSeatIndividualSuite from 'material-ui-icons/AirlineSeatIndividualSuite';
import messages from './messages';
import FeatureIcon from './FeatureIcon';


const styleSheet = createStyleSheet('MembershipFeaturesSection', (theme) => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    flexGrow: 1,
    position: 'relative',
  }),
  headline: {
    height: 250,
  },
  white: {
    color: 'white',
  },
  transparent: {
    'background-color': 'transparent',
  },
}));

function MembershipFeaturesSection(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div className={classes.root}>
      <Layout container gutter={16}>
        <Layout item xs={12}>
          <Layout
            container
            className={classes.headline}
            align={'center'}
            direction={'column'}
            justify={'center'}
          >
            <Layout item xs>
              <Paper elevation={0} square className={classes.transparent}>
                <Text type={'display3'} component={'h1'} align={'center'} gutterBottom>
                  <FormattedMessage {...messages.headline} />
                </Text>
                <Text type={'subheading'} component={'h3'} align={'center'} secondary gutterBottom>
                  <FormattedMessage {...messages.slogan} />
                </Text>
              </Paper>
            </Layout>
          </Layout>
        </Layout>
        <Layout item xs={12}>
          <Layout
            container
            align={'center'}
            direction={'row'}
            justify={'center'}
          >
            <Layout item xs={4}>
              <FeatureIcon
                name={messages.privateBedroomName}
                description={messages.privateBedroomDescription}
                icon={AirlineSeatIndividualSuite}
              />
            </Layout>
            <Layout item xs={4}>
              <FeatureIcon
                name={messages.flexibleName}
                description={messages.flexibleDescription}
                icon={AirlineSeatIndividualSuite}
              />
            </Layout>
            <Layout item xs={4}>
              <FeatureIcon
                name={messages.furnishedName}
                description={messages.furnishedDescription}
                icon={AirlineSeatIndividualSuite}
              />
            </Layout>
            <Layout item xs={4}>
              <FeatureIcon
                name={messages.utilitiesCoveredName}
                description={messages.utilitiesCoveredDescription}
                icon={AirlineSeatIndividualSuite}
              />
            </Layout>
            <Layout item xs={4}>
              <FeatureIcon
                name={messages.wifiName}
                description={messages.wifiDescription}
                icon={AirlineSeatIndividualSuite}
              />
            </Layout>
            <Layout item xs={4}>
              <FeatureIcon
                name={messages.cleaningName}
                description={messages.cleaningDescription}
                icon={AirlineSeatIndividualSuite}
              />
            </Layout>
            <Layout item xs={4}>
              <FeatureIcon
                name={messages.suppliesName}
                description={messages.suppliesDescription}
                icon={AirlineSeatIndividualSuite}
              />
            </Layout>
            <Layout item xs={4}>
              <FeatureIcon
                name={messages.eventsName}
                description={messages.eventsDescription}
                icon={AirlineSeatIndividualSuite}
              />
            </Layout>
            <Layout item xs={4}>
              <FeatureIcon
                name={messages.laundryName}
                description={messages.laundryDescription}
                icon={AirlineSeatIndividualSuite}
              />
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

MembershipFeaturesSection.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

MembershipFeaturesSection.propTypes = {

};

export default MembershipFeaturesSection;
