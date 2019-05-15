import React, { Component } from 'react';
import { logIn } from '../store/actions/';
import { connect } from 'react-redux';
import { Button, Header, Icon, Segment, Form } from 'semantic-ui-react';

class Login extends Component {
    render() {
        return (
            <div>
                <Segment placeholder>
                    <Header style={{paddingTop: '20px'}} icon>
                        <Icon name='lock' />
                        Log into the database
                    </Header>
                    <Form unstackable>
                        <Form.Group style={{
                            display: 'flex',
                            justifyContent: 'center',
                            padding: '20px'
                        }}
                            widths={2}>
                            <Form.Input label='Your name' placeholder='Your name' />
                            <Form.Input label='Password' placeholder='Password' />
                        </Form.Group>
                        <Button style={{marginBottom: '20px'}} secondary onClick={this.props.logIn}>Log In</Button>
                    </Form>
                </Segment>
            </div>
        );
    }
}
 
export default connect(
    null,
    { logIn }
)(Login);