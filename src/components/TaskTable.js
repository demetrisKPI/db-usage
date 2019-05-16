import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import { fetchTaskTable } from '../store/actions/'

class TaskTable extends Component {
    state = {
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

    // componentDidMount() {
    //     this.props.fetchTaskTable();
    // }

    render() {
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>User</Table.HeaderCell>
                        <Table.HeaderCell>State</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {this.state.taskTable.map(key => {
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
        taskTable: state.active.taskTable
    }),
    { fetchTaskTable }
)(TaskTable);