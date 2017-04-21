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
import ToolBar from '../../components/ToolBar';
import BannerSection from '../../components/BannerSection';
import HomesSection from '../../components/HomesSection';
import FeaturesSection from '../../components/FeaturesSection';
import MembershipFeaturesSection from '../../components/MembershipFeaturesSection';
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
      <FeaturesSection />
      <MembershipFeaturesSection />
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
