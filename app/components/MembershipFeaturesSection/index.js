/**
*
* MembershipFeaturesSection
*
*/

import React from 'react';
// import styled from 'styled-components';

import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Layout from 'material-ui/Layout';
import Hotel from 'material-ui-icons/Hotel';
import Weekend from 'material-ui-icons/Weekend';
import Wifi from 'material-ui-icons/Wifi';
import InsertInvitation from 'material-ui-icons/InsertInvitation';
import LocalLaundryService from 'material-ui-icons/LocalLaundryService';
import LocalActivity from 'material-ui-icons/LocalActivity';
import WbSunny from 'material-ui-icons/WbSunny';
import LocalFlorist from 'material-ui-icons/LocalFlorist';
import RestaurantMenu from 'material-ui-icons/RestaurantMenu';
import messages from './messages';
import FeatureIcon from './FeatureIcon';
import SectionHeader from '../SectionHeader';


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
      <SectionHeader headline={messages.headline} slogan={messages.slogan} />
      <Layout container gutter={16}>
        <Layout item xs={12}>
          <Layout
            container
            align={'center'}
            direction={'row'}
            justify={'center'}
          >
            <Layout item xs={12} sm={4}>
              <FeatureIcon
                name={messages.privateBedroomName}
                description={messages.privateBedroomDescription}
                icon={Hotel}
              />
            </Layout>
            <Layout item xs={12} sm={4}>
              <FeatureIcon
                name={messages.flexibleName}
                description={messages.flexibleDescription}
                icon={InsertInvitation}
              />
            </Layout>
            <Layout item xs={12} sm={4}>
              <FeatureIcon
                name={messages.furnishedName}
                description={messages.furnishedDescription}
                icon={Weekend}
              />
            </Layout>
            <Layout item xs={12} sm={4}>
              <FeatureIcon
                name={messages.utilitiesCoveredName}
                description={messages.utilitiesCoveredDescription}
                icon={WbSunny}
              />
            </Layout>
            <Layout item xs={12} sm={4}>
              <FeatureIcon
                name={messages.wifiName}
                description={messages.wifiDescription}
                icon={Wifi}
              />
            </Layout>
            <Layout item xs={12} sm={4}>
              <FeatureIcon
                name={messages.cleaningName}
                description={messages.cleaningDescription}
                icon={LocalFlorist}
              />
            </Layout>
            <Layout item xs={12} sm={4}>
              <FeatureIcon
                name={messages.suppliesName}
                description={messages.suppliesDescription}
                icon={RestaurantMenu}
              />
            </Layout>
            <Layout item xs={12} sm={4}>
              <FeatureIcon
                name={messages.eventsName}
                description={messages.eventsDescription}
                icon={LocalActivity}
              />
            </Layout>
            <Layout item xs={12} sm={4}>
              <FeatureIcon
                name={messages.laundryName}
                description={messages.laundryDescription}
                icon={LocalLaundryService}
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
