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

import React from 'react';
import Divider from 'material-ui/Divider';
import customPropTypes from 'material-ui/utils/customPropTypes';
import { createStyleSheet } from 'jss-theme-reactor';
import ToolBar from '../../components/ToolBar';
import BannerSection from '../../components/BannerSection';
import HomesSection from '../../components/HomesSection';
import FeaturesSection from '../../components/FeaturesSection';
import MembershipFeaturesSection from '../../components/MembershipFeaturesSection';
import TestimonialsSection from '../../components/TestimonialsSection';


const styleSheet = createStyleSheet('HomePage', () => ({
  divider: {
    margin: '40px 30% 0 30%',
  },
}));


function HomePage(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div>
      <ToolBar />
      <BannerSection />
      <HomesSection />
      <Divider className={classes.divider} />
      <FeaturesSection />
      <MembershipFeaturesSection />
      <TestimonialsSection />
    </div>
  );
}

HomePage.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

export default HomePage;
