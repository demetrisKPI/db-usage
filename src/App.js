import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import UserTable from './components/UserTable';
import UserMng from './components/UserMng';
import TaskTable from './components/TaskTable';
import TaskMng from './components/TaskMng';
import { connect } from 'react-redux';
import { Header, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
	renderBody() {
		const { activeItem, logged } = this.props;
		if (!logged) return (<Login />);
		else {
			switch (activeItem) {
				case 'User Table': return (<UserTable />);
				case 'Task Table': return (<TaskTable />);
				case 'User Management': return (<UserMng />);
				case 'Task Management': return (<TaskMng />);
				default: return (
					<Header as='h2' style={{
						display: 'flex',
						justifyContent: 'center',
						marginTop: '20%'
					}}>
						<Icon name='settings' />
						<Header.Content>
							Congratulations with successful authentication
							<Header.Subheader>Now you can choose operations to perform</Header.Subheader>
						</Header.Content>
					</Header>
				);
			}

		}
	}
  	render() {
		return (
			<div className="body">
				<Navbar />
				<div>{this.renderBody()}</div>
			</div>
		);
  	}
}

export default connect(
	state => ({
		activeItem: state.active.activeItem,
		logged: state.active.logged
	}),
	null
)(App);