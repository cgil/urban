/*
 *
 * ApplicationPage
 *
 */

import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import { connect } from 'react-redux';
import Layout from 'material-ui/Layout';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import messages from './messages';
import goTo from '../../utils/goTo';
import ToolBar from '../../components/ToolBar';


const styleSheet = createStyleSheet('ApplicationPage', (theme) => ({
  input: {
    margin: 10,
  },
  paper: {
    'background-color': 'transparent',
    marginBottom: 80,
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing.unit,
    height: 57,
    'font-size': 16,
    padding: '0 24px',
    minWidth: 150,
  },
}));

export class ApplicationPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  };

  state = {
    name: '',
  };

  render() {
    const classes = this.context.styleManager.render(styleSheet);
    const toolbarButtons = [
      { name: messages.ownerInfoButton, route: goTo(this.props.dispatch, '/partners') },
    ];

    return (
      <div>
        <ToolBar buttons={toolbarButtons} />
        <Layout container gutter={16} direction={'column'} align={'center'} justify={'center'}>
          <Layout item xs={12}>
            <Layout
              container
              align={'center'}
              direction={'row'}
              justify={'center'}
            >
              <Layout item xs={12}>
                <TextField
                  id={'firstName'}
                  label={'First Name'}
                  className={classes.input}
                  value={this.state.firstName}
                  onChange={(event) => this.setState({ firstName: event.target.value })}
                />
              </Layout>
              <Layout item xs={12}>
                <TextField
                  id={'lastName'}
                  label={'Last Name'}
                  className={classes.input}
                  value={this.state.lastName}
                  onChange={(event) => this.setState({ lastName: event.target.value })}
                />
              </Layout>
              <Layout item xs={12}>
                <TextField
                  id={'email'}
                  label={'Email'}
                  className={classes.input}
                  value={this.state.email}
                  onChange={(event) => this.setState({ email: event.target.value })}
                />
              </Layout>
              <Layout item xs={12}>
                <Paper elevation={0} square className={classes.paper}>
                  <Button raised accent className={classes.button}>
                    <FormattedMessage {...messages.submitButton} />
                  </Button>
                </Paper>
              </Layout>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

ApplicationPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapDispatchToProps)(ApplicationPage);
