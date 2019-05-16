import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTask, fetchTaskTable, fetchUserTable } from '../store/actions/';
import { Tab, Form, Label, Header } from 'semantic-ui-react';

class SetTask extends Component {
    state = {
        userid: 0,
        taskid: 0,
        done: false,
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
        ],
        taskTable: [
            {
                "id": 1,
                "name": "Say hello",
                "user": null,
                "state": null
            },
            {
                "id": 2,
                "name": "Say goodbuy",
                "user": 4,
                "state": "working on"
            },
            {
                "id": 3,
                "name": "Do task",
                "user": 1,
                "state": null
            }
        ]
    }
    handleSelectUser = (e, { value }) => {
        this.setState({ userid: value });
    }
    handleSelectTask = (e, { value }) => {
        this.setState({ taskid: value });
    }
    handleSubmit = e => {
        if (this.state.userid && this.state.taskid) {
            let tmp = {
                userid: this.state.user,
                taskid: this.state.task
            };
            this.props.setTask(tmp);
            this.setState({ done: true });
        }
    }
    componentDidMount() {
        this.props.fetchTaskTable();
        this.props.fetchUserTable();
    }
    renderDone() {
        if (this.state.done) {
            return (
                <Label style={{margin: '20px'}} size='big' color='green'>
                    Done!
                    <Header style={{marginTop: '10px'}} as='h5'>Now check the table or refresh to continue</Header>
                </Label>
            )
        }
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
                            this.state.userTable
                                .filter(key => !key.task)
                                .map(key => ({ text: key.name, value: key.id }))
                        } required label='Select a user' onChange={this.handleSelectUser}/>
                        <Form.Select options={
                            this.state.taskTable
                                .filter(key => !key.user)
                                .map(key => ({ text: key.name, value: key.id }))
                        } required label='Select a task' onChange={this.handleSelectTask}/>
                        <Form.Button secondary style={{
                            marginTop: '22px'
                        }} onClick={this.handleSubmit}>Submit</Form.Button>
                    </Form.Group>
                </Form>
                <div>{this.renderDone()}</div>
            </Tab.Pane>
        );
    }
}
 
export default connect(
    state => ({
        taskTable: state.active.taskTable,
        userTable: state.active.userTable
    }),
    { fetchTaskTable, fetchUserTable, setTask }
)(SetTask);