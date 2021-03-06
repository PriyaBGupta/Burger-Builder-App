import React, { Component } from 'react';
import Order from '../../component/Order/Order';
import axios from '../../axios-orders';
import withErrorHandling from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as action from '../../store/action/index';
import Spinner from '../../component/UI/Spinner/Spinner';

class Orders extends Component {
    componentDidMount() {
        this.props.onFetchOrder(this.props.token, this.props.userId);
    }
    render() {
        let orders = <Spinner></Spinner>
        if (!this.props.loading) {
            orders = this.props
                .orders.map((order) => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price} />
                ))
        }
        return (
            <div>
                {orders}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onFetchOrder: (token, userId) => dispatch(action.fetchOrder(token, userId))
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandling(Orders, axios));

