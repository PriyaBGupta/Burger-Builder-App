import React, {Component} from 'react';
import Input from '../../component/UI/Input/Input';
import Button from '../../component/UI/Button/Button';
import classes from './Auth.module.css';
import {connect} from 'react-redux';
import * as action from '../../store/action/index';
import Spinner from '../../component/UI/Spinner/Spinner';
import { Redirect } from 'react-router-dom';
import {updateObject, checkValidity} from '../../shared/utility';

class Auth extends Component{
    state = {
        control: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignup: true
    }
    inputChangedHandler = (event, controlName) => {
        //we are not checking whole form validation 
        const updateControl = updateObject(this.state.control[controlName],{
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.control[controlName].validation),
            touched: true
        })
        const updatedControls = updateObject(this.state.control,
            {[controlName] : updateControl});
        this.setState({control: updatedControls})
    }
    submitHandler = (event) => {
        event.preventDefault();
        this.props.onSubmitHandler(this.state.control.email.value, this.state.control.password.value , this.state.isSignup);

    }
    switchAuthModeHandler = () => {
        this.setState(prevState=>({isSignup:!prevState.isSignup}));
    }
    componentDidMount() {
        if(!this.props.buildingBurger && this.props.authRedirectPath !== '/'){
            //to prevent checkout getting called even though burger is not built
            this.props.onSetAuthRedirectPath();
        }
    }

    render(){
        const formElementArray = [];
        for (let key in this.state.control) {
            formElementArray.push({
                id: key,
                config: this.state.control[key]
            })
        }
        let form = (<form onSubmit={this.submitHandler}>
            {formElementArray.map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}/>
            ))}
            </form>)
        if(this.props.loading){
            form = <Spinner></Spinner>
        }
        let errorMessage = null;
        if(this.props.error){
            errorMessage = <p>{this.props.error.message}</p>;
        }
        let authRedirect = null;
        if(this.props.isAuthenticated){
            authRedirect = <Redirect to={this.props.authRedirectPath}/>
        }
        return(
            <div className={classes.Auth}>
                {authRedirect}
                {errorMessage}
                {form}
                <Button 
                    btnType="Success" 
                    clicked={this.submitHandler}
                    >SUMBIT</Button>
                    <br></br>
                <Button 
                    btnType="Danger"
                    clicked={this.switchAuthModeHandler}
                    >Switch to{this.state.isSignup?'Sign In':'Sign Up'}</Button>
            </div>
        )
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitHandler: (email, password, isSignup) => dispatch(action.auth(email, password, isSignup)),
        onSetAuthRedirectPath: () => dispatch(action.setAuthRedirectPath('/'))
    }
}
const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authenticateRedirect
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Auth);