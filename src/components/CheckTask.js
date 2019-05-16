import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTaskTable } from '../store/actions/';
import { Tab, Form, Label, Header, FormField } from 'semantic-ui-react';

class SetTask extends Component {
  state = {
    task: 'initial',
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
  handleSelectTask = (e, { value }) => this.setState({ task: value });
  componentDidMount() {
    this.props.fetchTaskTable();
  }
  renderTask = () => {
    if (this.state.task === 'initial') return <div></div>;
    else if (this.state.task) return (
      <Label style={{ marginTop: '23px' }} size='large' color='green'>
        Task is already occupied. Its state: "{this.state.taskTable.find(el => el.user === this.state.task).state}"
      </Label>
    )
    else return <Label style={{ marginTop: '23px' }} size='large' color='red'>No user is set for this task yet</Label>
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
              this.state.taskTable.map(key => ({ value: key.user, text: key.name, key: key.id }))
            } required label='Select a task' onChange={this.handleSelectTask} />
            <div>{this.renderTask()}</div>
          </Form.Group>
        </Form>
      </Tab.Pane>
    );
  }
}

export default connect(
  state => ({
    taskTable: state.active.taskTable
  }),
  { fetchTaskTable }
)(SetTask);