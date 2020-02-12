import React, { Component } from 'react';
import './Dashboard.css';

class Dashboard extends Component {
    render() {
        return (
            <section className='dashboard'>
                {this.props.children}
            </section>
        );
    }
}

export default Dashboard;