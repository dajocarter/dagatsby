import React from "react";
import Link from "gatsby-link";
import "./index.scss";
import "./Header.scss";

const Header = props => (
  <header>
    {props.location.pathname === "/" ? (
      <h1>
        <Link to={"/"}>Gatsby Starter Blog</Link>
      </h1>
    ) : (
      <h3>
        <Link to={"/"}>Gatsby Starter Blog</Link>
      </h3>
    )}
  </header>
);

const Template = ({ location, children }) => (
  <div>
    <Header location={location} />
    {children()}
  </div>
);

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object
};

export default Template;
