import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddUser from './AddUser';
import DeleteUser from './DeleteUser';
import SetTask from './SetTask';
import CheckUser from './CheckUser';
import { Tab } from 'semantic-ui-react';

class UserMng extends Component {
    state = {
        panes: [
            {menuItem: 'Add new user to database', render: () => <AddUser />},
            {menuItem: 'Delete user from database', render: () => <DeleteUser />},
            {menuItem: 'Set a task for user', render: () => <SetTask/>},
            {menuItem: 'Check user', render: () => <CheckUser/>}
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
)(UserMng);