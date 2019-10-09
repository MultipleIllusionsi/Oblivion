import React, { Component } from "react";

import Error404 from "./error404";

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
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
