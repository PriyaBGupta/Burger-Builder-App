import React, { Component } from 'react';
import Button from '../../../component/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../component/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }
    orderHandler = (event) => {
        debugger;
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Priya Gupta',
                address: {
                    street: 'TestStreet 1',
                    zipCode: '41351',
                    country: 'India'
                },
                email: 'test@test.com',
                deliveryMethod: 'fastest'
            }
        }
        debugger;
        axios.post('/orders.json', order)
            .then(response => {
                console.log("PumPum bahut tang krta hai");
                this.setState({ loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false});
            });
    }
    render (){
        let form = (<form>
            <input className={classes.Input} type="text" name="name" placeholder="Your name"/>
            <input className={classes.Input} type="email" name="email" placeholder="Your email"/>
            <input className={classes.Input} type="text" name="street" placeholder="Street"/>
            <input className={classes.Input} type="text" name="postal" placeholder="Postal code"/>
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>)
        if(this.state.loading){
            form = <Spinner/>
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        )   
    }
}
export default ContactData;