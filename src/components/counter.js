import React, { Component } from 'react';
import { increment, decrement, post} from '../actions/index.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Counter extends Component{
  constructor(props) {
    super(props);
    this.state = {
        datas:""
    }
}
  componentDidMount(){
    this.webCall();
  }

  webCall=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method:'GET',
    })
    .then((response)=>response.json())
    .then((responseData)=>{
      this.setState({
        datas:responseData
      })
      //sending the data to redux store
      this.props.post(this.state.datas);
    })
  }

  render(){
    return(
      <div>
        <h1>Redux counter</h1>
        <h6>{this.props.count }</h6>
        <h4> Number of user is {this.props.Form.length}</h4>
        <button
        onClick={()=>{
          this.props.increment()
        }}
        > increment </button>
        <button
         onClick={()=>{
          this.props.decrement()
        }}
        > decrement </button>
      </div>
    );
  }
}

//getting the data
function mapStateToProps(state){
  return{
    count : state.count,
    Form: state.form,
    Post:state.post
  };
}
//dispatching an action
function matchDispatchToProps(dispatch){
  return bindActionCreators({increment: increment, decrement: decrement, post:post }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Counter);