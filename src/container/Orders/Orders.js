import React, { Component } from 'react';
import Order from '../../component/Order/Order';
import axios from '../../axios-orders';
import withErrorHandling from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: false
    }
    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                const fetchOrders = [];
                this.setState({loading: false});
                //res.data is object whose first property is unique identifier 
                for (let key in res.data) {
                    fetchOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({orders: fetchOrders});
            })
            .catch(err => {
                this.setState({loading: false})
            });

    }
    render() {
        if(this.state.loading){

        }
        return (
            <div>
                {this.state.orders.map((order)=>(
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price}/>
                ))}
            </div>
        )
    }
}
export default withErrorHandling(Orders, axios);