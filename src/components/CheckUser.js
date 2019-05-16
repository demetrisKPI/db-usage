import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserTable } from '../store/actions/';
import { Tab, Form, Label, Header, FormField } from 'semantic-ui-react';

class SetTask extends Component {
    state = {
        task: 'initial',
        userTable: [
            {
                "id": 1,
                "name": "Johny",
                "task": 3,
                "comm": 1,
                "worbef": 1,
                "skills": 1,
                "knowledge": 1
            },
            {
                "id": 2,
                "name": "Johny Will",
                "task": null,
                "comm": 1,
                "worbef": 0,
                "skills": 1,
                "knowledge": 0
            },
            {
                "id": 4,
                "name": "Jack",
                "task": 2,
                "comm": 0,
                "worbef": 0,
                "skills": 0,
                "knowledge": 1
            },
            {
                "id": 5,
                "name": "Eblan",
                "task": null,
                "comm": 1,
                "worbef": 0,
                "skills": 1,
                "knowledge": 0
            },
            {
                "id": 7,
                "name": "Eblann",
                "task": null,
                "comm": 1,
                "worbef": 0,
                "skills": 1,
                "knowledge": 0
            }
        ]
    }
    handleSelectUser = (e, { value }) => {
        this.setState({ task: value });
    }
    componentDidMount() {
        this.props.fetchUserTable();
    }
    renderTask() {
        if (this.state.task === 'initial') return <div></div>;
        else if (this.state.task) return <Label style={{marginTop: '23px'}} size='large' color='green'>User is already occupied</Label>;
        else return <Label style={{marginTop: '23px'}} size='large' color='red'>No task is set for this user yet</Label>
    }
    render() {
        return (
            <Tab.Pane>
                <Form unstackable>
                    <Form.Group style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '20px'
                        }} widths={2}>
                        <Form.Select options={
                            this.state.userTable.map(key => ({ text: key.name, value: key.task }))
                        } required label='Select a user' onChange={this.handleSelectUser}/>  
                        <div>{this.renderTask()}</div>                      
                    </Form.Group>
                </Form>
            </Tab.Pane>
        );
    }
}
 
export default connect(
    state => ({
        userTable: state.active.userTable
    }),
    { fetchUserTable }
)(SetTask);