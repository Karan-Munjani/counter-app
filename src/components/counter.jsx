import React, { Component } from 'react';

class Counter extends Component {

    state = {
        // Updating Only local State Value, thus not updating in COUNTERS component
        // value: this.props.counter.value,

        // So we depend on controlled component: who gets data from props and to change data it raises event
    };


    product = {
        id: 2,
        name: "Sp Royter"
    };

    render() {

        // console.log(this.props) 

        let classes = this.getClassName();
        return (
            <div>
                {this.props.counter.children}

                <span className={classes}>
                    {this.formatCount()}
                </span>

                <button
                    onClick={() => { this.props.onIncrement(this.props.counter) }}
                    type="button"
                    className="btn btn-primary m-2">
                    increment
                </button>


                <button
                    onClick={() => (this.props.onDel(this.props.counter.id))} type="button"
                    className="btn btn-danger m-2" >
                    Delete
                </button>


                <button
                    onClick={() => (this.props.onDecrement(this.props.counter.value, this.props.counter.id))}
                    type="button" className="btn btn-secondary m-2" >
                    Decrement
                </button>


            </div>
        );
    }



    constructor(props) {
        super(props);
        // var value = this.props.value;
        // console.log(value)
        // this.handleIncrement = this.handleIncrement.bind(this)
    }


    // handleDecrement() {
    //     if (this.state.value !== 0) {
    //         this.setState({
    //             value: this.state.value - 1
    //         })
    //     }
    //     else {
    //         this.setState({
    //             value: 0
    //         })
    //     }
    // }







    // Methods Outside of Render
    getClassName() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "ZERO" : value;
    }


}

export default Counter;
