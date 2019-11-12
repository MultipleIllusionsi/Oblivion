import React, { Component } from "react";

import Error404 from "./error404";

class ErrorBoundary extends Component {
  state = {
    hasErrored: false,
  };

  static getDerivedStateFromError(_error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, _info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return <Error404 />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
