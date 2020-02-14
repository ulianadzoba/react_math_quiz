import React, { Component } from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';
import Backdrop from '../../Backdrop/Backdrop';

class Menu extends Component {
    render() {
        const classes = ['menu'];
        if (!this.props.isOpen) {
            classes.push('hide-menu');
        };

        return (
            <>
                <div className={classes.join(' ')}>
                    <ul className='menu-list'>
                        <li>
                            <NavLink to='/' exact={true} activeClassName='active - link' onClick={this.props.closeMenu}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/quiz' exact={true} activeClassName='active - link' onClick={this.props.closeMenu}>Get started</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to='/login' exact={true} activeClassName='active - link' onClick={this.props.closeMenu}>Log in</NavLink>
                        </li> */}
                    </ul>
                </div>
                {this.props.isOpen ? <Backdrop onClose={this.props.closeMenu} /> : null}
            </>
        );
    }
}

export default Menu;