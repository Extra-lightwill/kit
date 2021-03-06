// ----------------------
// IMPORTS

/* NPM */

// React
import React from 'react';
import PropTypes from 'prop-types';

import {
  QueryRenderer,
  graphql
} from 'react-relay';

import environment from '../kit/lib/createRelayEnvironment';

// GraphQL
//import { graphql } from 'react-apollo';

// Routing
import {
  NavLink,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

// <Helmet> component for setting the page title
import Helmet from 'react-helmet';

/* Local */

// NotFound 404 handler for unknown routes
import { NotFound, Redirect } from 'kit/lib/routing';

// GraphQL queries
import allMessages from 'src/queries/all_messages.gql';

// Styles
import './styles.global.css';
import css from './styles.css';
import sass from './styles.scss';
import less from './styles.less';

// Get the ReactQL logo.  This is a local .svg file, which will be made
// available as a string relative to [root]/dist/assets/img/
import logo from './reactql-logo.svg';

// ----------------------

import RoutesIndex from './Routes/RoutesIndex';
import Feed from './Feed';

// Export a simple component that allows clicking on list items to change
// the route, along with a <Route> 'listener' that will conditionally display
// the <Page> component based on the route name
export default () => (
  <div>
  
  <h1>REACTQL RELAY MODERN EXAMPLE</h1>

    <Link to="/page-one">Link to page one</Link>
    <br />
    <Link to="/page-two">Link to page two</Link>
    <RoutesIndex />

     <QueryRenderer
          environment={environment}

          query={graphql`
            query appQuery {
              feed (type: NEW, limit: 5) {
                ...Feed
              }
            }
          `}

          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (props) {
              console.log(props.feed);
              return <Feed data={props.feed} />;
            }
            return <div>Loading</div>;
          }}
        />

  </div>
);
