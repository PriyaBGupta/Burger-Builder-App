import React, { Component } from 'react';
import Auxillary from '../Auxillary/Auxillary';
import Modal from '../../component/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        
        constructor(props) {
            super(props);
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {                
                this.setState({ error: error });
            });
            this.state = {
                error: null
            }
        }
        componentWillUnmount(){
            // we write this to reduce memory redundancy so that they are destroyed as soon as the component is not required
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }
        render() {
            return (
                <Auxillary>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxillary>
            )
        }
    }
}
export default withErrorHandler;