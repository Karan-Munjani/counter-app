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
        const { counter, onDel, onIncrement, onDecrement } = this.props;
        // console.log(this.props) 

        let classes = this.getClassName();
        return (
            <div>
                {counter.children}

                <span className={classes}>
                    {this.formatCount()}
                </span>

                <button
                    onClick={() => { onIncrement(counter) }}
                    type="button"
                    className="btn btn-primary m-2">
                    +
                </button>

                <button
                    onClick={() => (onDecrement(counter))}
                    type="button" className="btn btn-secondary m-2" disabled={counter.value === 0}>
                    -
                </button>

                <button
                    onClick={() => (onDel(counter.id))} type="button"
                    className="btn btn-danger m-2" >
                    x
                </button>




            </div>
        );
    }


    // Methods Outside of Render
    getClassName() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "0" : value;

    }


}

export default Counter;
