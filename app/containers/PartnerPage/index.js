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
import ToolBar from '../../components/ToolBar';
import BannerSection from '../../components/BannerSection';
import CtaSection from '../../components/CtaSection';
import FooterSection from '../../components/FooterSection';
import messages from './messages';
import goTo from '../../utils/goTo';
import bannerImg from '../../static/img/property-owner-banner.jpg';


function PartnerPage(props) {
  const toolbarButtons = [
    { name: messages.ownerInfoButton, route: goTo(props.dispatch, '/partners') },
  ];
  return (
    <div>
      <ToolBar buttons={toolbarButtons} />
      <BannerSection
        headline={messages.bannerHeadline}
        slogan={messages.bannerSlogan}
        backgroundImage={bannerImg}
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
