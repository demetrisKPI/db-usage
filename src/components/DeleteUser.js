import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteUser, fetchUserTable } from '../store/actions/';
import { Tab, Form, Label, Header } from 'semantic-ui-react';

class DeleteUser extends Component {
    state = {
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
        ]
    }
    // componentDidMount() {
    //     this.props.fetchUserTable();
    // }
    handleSubmit = e => {
        if (this.state.user) {
            this.props.deleteUser(this.state.user);
            this.setState({ done: true });
        }
    }
    handleChange = (e, { value }) => {
        this.setState({ user: value });
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
                        <Form.Select required options={
                            this.state.userTable.map(key => ({ text: key.name, value: key.id }))
                        } label='Choose a user you want to delete' onChange={this.handleChange} />
                        <Form.Button style={{
                            marginTop: '22px'
                        }} secondary onClick={this.handleSubmit}>Submit</Form.Button>
                    </Form.Group>
                </Form>
                <div>{this.renderDone()}</div>
            </Tab.Pane>
        );
    }
}

export default connect(
    state => ({
        userTable: state.active.userTable
    }),
    { fetchUserTable, deleteUser }
)(DeleteUser);