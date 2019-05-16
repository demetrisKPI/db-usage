import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import { fetchUserTable } from '../store/actions/'

class UserTable extends Component {
    state = {
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
    render() {
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Task</Table.HeaderCell>
                        <Table.HeaderCell>Comm</Table.HeaderCell>
                        <Table.HeaderCell>Worbef</Table.HeaderCell>
                        <Table.HeaderCell>Skills</Table.HeaderCell>
                        <Table.HeaderCell>Knowledge</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {this.state.userTable.map(key => {
                        return (
                            <Table.Row key={key.id}>
                                {Object.values(key).map((item, i) => {
                                    return (<Table.Cell key={i}>{item}</Table.Cell>)
                                })}
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        );
    }
}
 
export default connect(
    state => ({
        userTable: state.active.userTable
    }),
    { fetchUserTable }
)(UserTable);