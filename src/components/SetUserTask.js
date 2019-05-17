import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTaskTable, fetchUserTable, setUserTask } from '../store/actions/';
import { Tab, Form, Label, Header } from 'semantic-ui-react';

class SetUserTask extends Component {
    state = {
        userid1: 0,
        userid2: 0,
        taskid: 0,
        done: false
    }
    handleSelectUser = (e, { value }) => {
        this.setState({ userid2: value });
    }
    handleSelectTask = (e, { value }) => {
        let tmp = this.props.taskTable.filter(key => key.id === value)[0].user || null;
        this.setState({ userid1: tmp, taskid: value });
    }
    handleSubmit = e => {
        if (this.state.userid && this.state.taskid) {
            let tmp = {
                userid1: this.state.userid1,
                userid2: this.state.userid2,
                taskid: this.state.task
            };
            this.props.setUserTask(tmp);
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
                            this.props.taskTable
                                .filter(key => key.user)
                                .map(key => ({ text: key.name, value: key.id }))
                        } required label='Select a task' onChange={this.handleSelectTask}/>
                        <Form.Select options={
                            this.props.userTable
                                .map(key => ({ text: key.name, value: key.id }))
                        } required label='Select a user' onChange={this.handleSelectUser}/>
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
    { fetchTaskTable, fetchUserTable, setUserTask }
)(SetUserTask);