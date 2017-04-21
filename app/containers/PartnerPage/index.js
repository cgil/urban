/*
 * PartnerPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Face from 'material-ui-icons/Face';
import Favorite from 'material-ui-icons/Favorite';
import Build from 'material-ui-icons/Build';
import Event from 'material-ui-icons/Event';
import GraphicEq from 'material-ui-icons/GraphicEq';
import ShowChart from 'material-ui-icons/ShowChart';
import ToolBar from '../../components/ToolBar';
import BannerSection from '../../components/BannerSection';
import FeaturesSection from '../../components/FeaturesSection';
import CtaSection from '../../components/CtaSection';
import FooterSection from '../../components/FooterSection';
import messages from './messages';
import goTo from '../../utils/goTo';
import bannerImg from '../../static/img/property-owner-banner.jpg';


function PartnerPage(props) {
  const toolbarButtons = [
    { name: messages.ownerInfoButton, route: goTo(props.dispatch, '/partners') },
  ];
  const features = [
    { name: messages.tenantPlacementName, description: messages.tenantPlacementDescription, icon: Face },
    { name: messages.advancedBookingName, description: messages.advancedBookingDescription, icon: Event },
    { name: messages.maintenanceName, description: messages.maintenanceDescription, icon: Build },
    { name: messages.supportName, description: messages.supportDescription, icon: Favorite },
    { name: messages.pricingName, description: messages.pricingDescription, icon: GraphicEq },
    { name: messages.transparacyName, description: messages.transparancyDescription, icon: ShowChart },
  ];
  return (
    <div>
      <ToolBar buttons={toolbarButtons} />
      <BannerSection
        headline={messages.bannerHeadline}
        slogan={messages.bannerSlogan}
        backgroundImage={bannerImg}
      />
      <FeaturesSection
        headline={messages.featuresHeadline}
        slogan={messages.featuresSlogan}
        features={features}
      />
      <CtaSection
        headline={messages.ctaHeadline}
        button={messages.ctaButton}
      />
      <FooterSection />
    </div>
  );
}

PartnerPage.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

PartnerPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(PartnerPage);
