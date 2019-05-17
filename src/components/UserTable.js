import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import { fetchUserTable } from '../store/actions/'

class UserTable extends Component {
    componentDidMount() {
        this.props.fetchUserTable();
    }
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
                    {this.props.userTable.map(key => {
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