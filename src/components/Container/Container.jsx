import PropTypes from "prop-types";
import React from "react";
import Container from "react-bootstrap/Container";

export default function Layout({ children }) {
  return <Container>{children}</Container>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
