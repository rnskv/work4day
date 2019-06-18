import React from 'react'
import { Route } from 'react-router-dom'

export default (props) => {
  const { routes, children } = props

  return (
    <React.Fragment>
      { children }
      {
        Object.keys(routes).map((route, index) => {
          const params = routes[route]
          return (
            <Route key={index} path={route} exact={params.exact || false} component={params.component} />
          )
        })
      }
    </React.Fragment>
  )
}
