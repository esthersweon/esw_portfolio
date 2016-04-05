import React from 'react';
import Project from './project';
import projectsData from 'projectsData';

export default React.createClass({
	render() {
		return (
			<div>
				{ projectsData.map(project => {
					return <Project key={ project.id } project={ project }/>
				}) }
			</div>
		);
	}
});