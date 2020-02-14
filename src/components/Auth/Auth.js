import React, { Component } from 'react';

class Auth extends Component {
    loginHandler = () => {
        console.log('Login');
    }
    submitHandler = () => {
        console.log('bmitSu');
    }
    render() {
        return (
            <div className='auth'>
                <div className='auth-title'>
                    Log in
</div>
                <form onSubmit={this.submitHandler} className='auth-form'>
                    <label> </label>
                    <input type='text' />
                    <input type='text' />
                    <button type='submit' onClick={this.loginHandler}>Log in</button>
                </form>
            </div>
        );
    }
}

export default Auth;
