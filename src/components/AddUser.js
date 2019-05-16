import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../store/actions/';
import { Tab, Form, Label, Header } from 'semantic-ui-react';

class AddUser extends Component {
    state = {
        options: [{text: 'Yes', value: true}, {text: 'No', value: false}],
        name: '',
        char: [],
        done: false
    }
    handleChange = (e, { value }) => {
        this.setState({ name: value });
    }
    handleSelect = (e, { value, id }) => {
        let tmp = this.state.char;
        tmp[id] = value;
        this.setState({ char: tmp });
    }
    handleSubmit = e => {
        if (this.state.name && this.state.char.length === 4) {
            let tmp = {
                name: this.state.name,
                char: this.state.char
            };
            this.props.addUser(tmp);
            this.setState({ done: true });
        }
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
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '20px'
                    }} widths={2}>
                        <Form.Input required onChange={this.handleChange} label='Name' placeholder='Name'/>
                        <Form.Select required options={this.state.options} label='Communicative'
                            onChange={this.handleSelect} id={0} 
                        />
                        <Form.Select required options={this.state.options} label='Worked before'
                            onChange={this.handleSelect} id={1}
                        />
                        <Form.Select required options={this.state.options} label='Skillful'
                            onChange={this.handleSelect} id={2}
                        />
                        <Form.Select required options={this.state.options} label='Certified'
                            onChange={this.handleSelect} id={3}
                        />
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
    null,
    { addUser }
)(AddUser);