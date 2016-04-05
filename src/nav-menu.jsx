import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function() {
    return (
      <div>
        <Link to={"/about"}>About</Link>
        <Link to={"/home"}>Home</Link>
        <Link to={"/project/advent-software"}>Projects</Link>
      </div>
    )
  }
});