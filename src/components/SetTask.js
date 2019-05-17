import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTask, fetchTaskTable, fetchUserTable } from '../store/actions/';
import { Tab, Form, Label, Header } from 'semantic-ui-react';

class SetTask extends Component {
    state = {
        userid: 0,
        taskid: 0,
        done: false
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
                            this.props.userTable
                                .filter(key => !key.task)
                                .map(key => ({ text: key.name, value: key.id }))
                        } required label='Select a user' onChange={this.handleSelectUser}/>
                        <Form.Select options={
                            this.props.taskTable
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