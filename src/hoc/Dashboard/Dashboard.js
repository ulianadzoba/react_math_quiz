import React, { Component } from 'react';
import './Dashboard.css';
import MenuButton from '../../components/Navigation/MenuButton/MenuButton';
import Menu from '../../components/Navigation/Menu/Menu';

class Dashboard extends Component {
    state = {
        menu: false
    }

    menuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    closeMenu = () => {
        this.setState({
            menu: false
        })
    }

    render() {
        return (
            <section className='dashboard'>
                <MenuButton
                    isOpen={this.state.menu}
                    openMenu={this.menuHandler} />
                <Menu
                    isOpen={this.state.menu}
                    closeMenu={this.closeMenu} />
                {this.props.children}
            </section>
        );
    }
}

export default Dashboard;