import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTask from './AddTask';
import SetTaskState from './SetTaskState';
import SetUserTask from './SetUserTask';
import CheckTask from './CheckTask';
import { Tab } from 'semantic-ui-react';

class TaskMng extends Component {
	state = {
		panes: [
			{ menuItem: 'Add new task to database', render: () => <AddTask /> },
			{ menuItem: 'Set another user for a task', render: () => <SetUserTask /> },
			{ menuItem: 'Set task state', render: () => <SetTaskState /> },
			{ menuItem: 'Check task', render: () => <CheckTask /> }
		]
	}
	render() {
		return (
			<Tab panes={this.state.panes} />
		);
	}
}

export default connect(
	null,
	null
)(TaskMng);