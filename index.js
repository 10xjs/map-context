import React, { Component, createElement } from 'react';
import wrapComponent from 'wrap-component';

const identity = val => val;

export default function context(
  contextTypes = {},
  mapContext = identity,
  childContextTypes = {}
) {
  return wrapComponent(Wrapped => {
    class Context extends Component {
      getChildContext() {
        return mapContext(this.context);
      }
      render() {
        return <Wrapped {...this.props} />;
      }
    }
    Context.contextTypes = contextTypes;
    Context.childContextTypes = childContextTypes;
  });
}
