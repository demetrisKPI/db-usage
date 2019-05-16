import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTaskTable, setTaskState } from '../store/actions/';
import { Tab, Form, Label, Header } from 'semantic-ui-react';

class SetTask extends Component {
  state = {
    taskid: 0,
    done: false,
    stateTable: [
      {
        "id": 1,
        "value": "working on"
      },
      {
        "id": 2,
        "value": "already done"
      },
      {
        "id": 3,
        "value": "pending admin check"
      },
      {
        "id": 4,
        "value": "done"
      },
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
  handleSelectTask = (e, { value }) => {
    this.setState({ taskid: value });
  }
  handleSelectState = (e, { value }) => {
    this.setState({ state: value });
  }
  handleSubmit = e => {
    if (this.state.taskid && this.state.state) {
      this.props.setTaskState({
        taskid: this.state.task,
        state: this.state.state
      })
      this.setState({ done: true });
    }
  }
  componentDidMount() {
    this.props.fetchTaskTable();
  }
  renderDone() {
    if (this.state.done) {
      return (
        <Label style={{ margin: '20px' }} size='big' color='green'>
          Done!
                    <Header style={{ marginTop: '10px' }} as='h5'>Now check the table or refresh to continue</Header>
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
              this.state.taskTable
                .map(key => ({ text: key.name, value: key.id }))
            } required label='Select a task' onChange={this.handleSelectTask} />
            <Form.Select options={
              this.state.stateTable
                .map(key => ({ text: key.value, value: key.value }))
            } required label='Select a state' onChange={this.handleSelectState} />

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
    taskTable: state.active.taskTable
  }),
  { fetchTaskTable, setTaskState }
)(SetTask);