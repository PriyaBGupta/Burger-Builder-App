import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Checkout from './container/Checkout/Checkout';
import { Route, Switch, withRouter } from 'react-router-dom';
import Auth from './container/Auth/Auth';
import Orders from './container/Orders/Orders';
import Logout from './container/Auth/Logout/Logout';
import {connect} from 'react-redux';
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

  componentDidMount(){
	this.props.onTryAutoSignUp();
  }
  render() {
    return (
      <div className="App">
        <Layout>
          {/* {this.state.show ? <BurgerBuilder/> :null} */}
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders}/>
            <Route path="/auth" component={Auth} />
            <Route path="/logout" component={Logout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
	return{
		onTryAutoSignUp : () => dispatch(action.authCheckState())
	}
}
export default withRouter(connect(null, mapDispatchToProps)(App));
