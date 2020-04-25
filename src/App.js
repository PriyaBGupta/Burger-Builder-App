import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Checkout from './container/Checkout/Checkout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Auth from './container/Auth/Auth';
import Orders from './container/Orders/Orders';
import Logout from './container/Auth/Logout/Logout';
import { connect } from 'react-redux';
import * as action from './store/action/index';


class App extends Component {
	// state = {
	//   show: true
	// }
	// componentDidMount(){
	//   setTimeout(()=>{
	//     this.setState({show: false});
	//   },5000);
	// }

	componentDidMount() {
		this.props.onTryAutoSignUp();
	}
	render() {
		// Here Redirect component adds gaurds to all the route which are not present at that time
		let routes =
			(<Switch>
				<Route path="/auth" component={Auth} />
				<Route path="/" exact component={BurgerBuilder} />
				<Redirect to="/" />
			</Switch>)
		if (this.props.isAuthenticated) {
			routes = <Switch>
				<Route path="/checkout" component={Checkout} />
				<Route path="/orders" component={Orders} />
				<Route path="/logout" component={Logout} />
				<Route path="/" exact component={BurgerBuilder} />
				<Redirect to="/" />
			</Switch>
		}
		return (
			<div className="App">
				<Layout>
					{/* {this.state.show ? <BurgerBuilder/> :null} */}
					{routes}
				</Layout>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onTryAutoSignUp: () => dispatch(action.authCheckState())
	}
}
const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null
	}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
