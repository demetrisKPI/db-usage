import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import { fetchTaskTable } from '../store/actions/'

class TaskTable extends Component {
    componentDidMount() {
        this.props.fetchTaskTable();
    }

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
                    {this.props.taskTable.map(key => {
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