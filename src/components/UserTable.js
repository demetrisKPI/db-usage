import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserTable extends Component {
    state = {  }
    componentDidMount() {

    }
    render() { 
        return (
            <div>
                UserTable
            </div>
        );
    }
}
 
export default connect(
    null,
    null
)(UserTable);