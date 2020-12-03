import React, { Component } from 'react';
import { insert } from '../actions/index.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Password: ""
        }
    }


    render() {

        const user = [];
        {
            this.props.Form.map((item, i) => {
                user.push(item);
            })
        }
        return (
            <div>
                <h1>Redux form</h1>
                <input type="text" placeholder='name'
                    value={this.state.Name}
                    onChange={(name) => {
                        this.setState({
                            Name: name.target.value
                        })
                    }}
                />
                <input placeholder="password"
                    value={this.state.Password}
                    onChange={(password) => {
                        this.setState({
                            Password: password.target.value
                        })
                    }}
                />
                <button
                    onClick={() => {
                        this.props.insert(this.state);
                        this.setState({
                            Name: "",
                            Password: ""
                        })
                    }}
                > Submit</button>

                {
                    user.map((item,i)=>{
                        return(
                            <div key={i}>
                            <p>{item.Firstname} password is,{item.Password}</p>
                        </div>
                        )
                    })
                }
            </div>
        );
    }
}

//getting the data
function mapStateToProps(state) {
    return {
        Form: state.form
    };
}
//dispatching an action
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ insert: insert }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(InputForm);