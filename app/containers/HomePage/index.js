/*
 * HomePage
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
import Divider from 'material-ui/Divider';
import customPropTypes from 'material-ui/utils/customPropTypes';
import { createStyleSheet } from 'jss-theme-reactor';
import Hotel from 'material-ui-icons/Hotel';
import Weekend from 'material-ui-icons/Weekend';
import Wifi from 'material-ui-icons/Wifi';
import InsertInvitation from 'material-ui-icons/InsertInvitation';
import LocalLaundryService from 'material-ui-icons/LocalLaundryService';
import LocalActivity from 'material-ui-icons/LocalActivity';
import WbSunny from 'material-ui-icons/WbSunny';
import LocalFlorist from 'material-ui-icons/LocalFlorist';
import RestaurantMenu from 'material-ui-icons/RestaurantMenu';
import ToolBar from '../../components/ToolBar';
import BannerSection from '../../components/BannerSection';
import HomesSection from '../../components/HomesSection';
import BenefitsSection from '../../components/BenefitsSection';
import FeaturesSection from '../../components/FeaturesSection';
import TestimonialsSection from '../../components/TestimonialsSection';
import CtaSection from '../../components/CtaSection';
import FooterSection from '../../components/FooterSection';
import messages from './messages';
import goTo from '../../utils/goTo';
import bannerImg from '../../static/img/banner.jpg';


const styleSheet = createStyleSheet('HomePage', () => ({
  divider: {
    margin: '40px 30% 0 30%',
  },
}));

function HomePage(props, context) {
  const classes = context.styleManager.render(styleSheet);
  const toolbarButtons = [
    { name: messages.ownerInfoButton, route: goTo(props.dispatch, '/partners') },
  ];
  const features = [
    { name: messages.privateBedroomName, description: messages.privateBedroomDescription, icon: Hotel },
    { name: messages.flexibleName, description: messages.flexibleDescription, icon: InsertInvitation },
    { name: messages.furnishedName, description: messages.furnishedDescription, icon: Weekend },
    { name: messages.utilitiesCoveredName, description: messages.utilitiesCoveredDescription, icon: WbSunny },
    { name: messages.wifiName, description: messages.wifiDescription, icon: Wifi },
    { name: messages.cleaningName, description: messages.cleaningDescription, icon: LocalFlorist },
    { name: messages.suppliesName, description: messages.suppliesDescription, icon: RestaurantMenu },
    { name: messages.eventsName, description: messages.eventsDescription, icon: LocalActivity },
    { name: messages.laundryName, description: messages.laundryDescription, icon: LocalLaundryService },
  ];
  return (
    <div>
      <ToolBar buttons={toolbarButtons} />
      <BannerSection
        headline={messages.bannerHeadline}
        slogan={messages.bannerSlogan}
        button={messages.bannerButton}
        backgroundImage={bannerImg}
      />
      <HomesSection />
      <Divider className={classes.divider} />
      <BenefitsSection />
      <FeaturesSection
        headline={messages.featuresHeadline}
        slogan={messages.featuresSlogan}
        features={features}
      />
      <TestimonialsSection />
      <CtaSection
        headline={messages.ctaHeadline}
        button={messages.ctaButton}
      />
      <FooterSection />
    </div>
  );
}

HomePage.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(HomePage);
