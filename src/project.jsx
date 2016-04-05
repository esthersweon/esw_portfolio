import React from 'react';
import { Router, Route, Link } from 'react-router';

export default React.createClass({
  render: function() {
  	let project = this.props.project;
    return (
      <Link to={`/project/${project.slug}`}>
	      <div className="col-md-12" style={{backgroundColor: 'lightyellow', padding: 20, marginBottom: 20}}>
	        <h1>{ project.client }</h1>
	        <p>{ project.blurb }</p>
	        <p>{ project.techStack }</p>
	        <p>{ project.tags }</p>
	      </div>
      </Link>
    )
  }
});