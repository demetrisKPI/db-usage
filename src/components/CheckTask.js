import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTaskTable } from '../store/actions/';
import { Tab, Form, Label } from 'semantic-ui-react';

class SetTask extends Component {
  state = {
    task: 'initial'
  }
  handleSelectTask = (e, { value }) => this.setState({ task: value });
  componentDidMount() {
    this.props.fetchTaskTable();
  }
  renderTask = () => {
    if (this.state.task === 'initial') return <div></div>;
    else if (this.state.task) return (
      <Label style={{ marginTop: '23px' }} size='large' color='green'>
        Task is already occupied. Its state: "{this.props.taskTable.find(el => el.user === this.state.task).state}"
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
              this.props.taskTable.map(key => ({ value: key.user, text: key.name, key: key.id }))
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