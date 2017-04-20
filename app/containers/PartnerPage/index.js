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

import React from 'react';
import customPropTypes from 'material-ui/utils/customPropTypes';
import ToolBar from '../../components/ToolBar';
import BannerSection from '../../components/BannerSection';
import CtaSection from '../../components/CtaSection';
import FooterSection from '../../components/FooterSection';


function PartnerPage() {
  return (
    <div>
      <ToolBar />
      <BannerSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
}

PartnerPage.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

export default PartnerPage;
