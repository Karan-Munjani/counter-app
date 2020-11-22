import React, { Component } from 'react';

class Nav extends Component {

    render() {
        return (
            <nav class="navbar navbar-light bg-light">
                <div className="container">
                    <span class="navbar-brand mb-0 h1">Counter App</span>

                </div>

            </nav>

        );
    }
    getCount() {
        console.log(this.state.Counter);
    }
}

export default Nav;