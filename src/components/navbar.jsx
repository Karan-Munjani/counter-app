import React, { Component } from 'react';

class Nav extends Component {

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Counter App</span>


            </nav>

        );
    }
    getCount() {
        console.log(this.state.Counter);
    }
}

export default Nav;