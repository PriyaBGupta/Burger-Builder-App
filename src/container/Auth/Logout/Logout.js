import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import * as action from '../../../store/action/index';

class Logout extends Component{
    componentDidMount(){
        this.props.onLogout();
    }
    render(){
        return(
            <Redirect to='/'></Redirect>
        )
    }
}
 const mapDispatchToProps = (dispatch) =>{
     return{
         onLogout : () => dispatch(action.authLogout())
     }
 }

export default connect(null, mapDispatchToProps)(Logout)