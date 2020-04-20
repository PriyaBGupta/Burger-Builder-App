import React, {Component} from 'react';
import Input from '../../component/UI/Input/Input';
import Button from '../../component/UI/Button/Button';
import classes from './Auth.module.css';
import {connect} from 'react-redux';
import * as action from '../../store/action/index';

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
        }
    }
    inputChangedHandler = (event, controlName) => {
        //we are not checking whole form validation 
        const updatedControls ={
            ...this.state.control,
            [controlName] : {
                ...this.state.control[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.control[controlName].validation),
                touched: true
            }
        };
        this.setState({control: updatedControls})
    }
    checkValidity = (value, rules) => {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.isEmail){
            const pattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
            isValid = pattern.test(value) && isValid
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    }
    submitHandler = (event) => {
        event.preventDefault();
        this.props.onSubmitHandler(this.state.control.email.value, this.state.control.password.value);

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
        return(
            <div className={classes.Auth}>
                {form}
                <Button 
                    btnType="Success" 
                    clicked={this.submitHandler}
                    >SUMBIT</Button>
            </div>
        )
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitHandler : (email,password) => dispatch(action.auth(email, password))
    }
}
export default connect(null, mapDispatchToProps)(Auth);