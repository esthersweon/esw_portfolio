import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ProjectSection from './project-section';

export default React.createClass({
	getInitialState() {
		return { showProjects: false };
	},
	componentDidMount() {
		this.projectsFadeInEffect = setInterval(() => {
			this.setState({ showProjects: true });
		}, 1000);
	},
	componentWillUnmount() {
		clearInterval(this.projectsFadeInEffect);
	},
	render() {
		return (
			<ReactCSSTransitionGroup 
				transitionName="project-section" 
				transitionEnterTimeout={ 1000 } 
				transitionLeaveTimeout={ 1000 }>
	          <ProjectSection />
	        </ReactCSSTransitionGroup>
		);
	}
});