import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default props => {
  const { routes, children } = props;

  const routesKeys = Object.keys(routes);

  const content = routesKeys.map((route, index) => {
    const params = routes[route];
    return <Route key={index} path={route} exact={params.exact || false} component={params.component} />;
  });
  console.log('E<FKF', routes);
  return (
    <React.Fragment>
      {children}
      <Switch>{content}</Switch>
    </React.Fragment>
  );
};
