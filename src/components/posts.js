import React, { Component } from 'react';
import {connect} from 'react-redux';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas:""
        }
    }
    render() { 
        const detail = [];
        //double mapping is done
        {
            this.props.Post.map((item, i) => {
                {
                    item.details.map((c,j)=>{
                        return(
                        detail.push(item.details)
                        )
                    })
                }
            })
        }
        return ( 
             <div>
                  {
                    detail.slice(0,10).map((c,i)=>{
                       return(
                                <div key={i} style={{borderRadius:10,backgroundColor:'grey'}}>
                                    <p>id: {c[i].id}</p>
                                    <p>title: {c[i].title}</p>
                                    <p>body: {c[i].body}</p>
                                </div>
                       )
                    })
                }
             </div>
         );
    }
}
 
//getting the data
function mapStateToProps(state){
    return{
      Post:state.post
    };
  }
  
  export default connect(mapStateToProps)(PostList);