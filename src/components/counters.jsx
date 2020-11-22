import React, { Component } from 'react';
import Counter from "./counter";


class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 10 },
            { id: 3, value: 5 },
            { id: 4, value: 5 }
        ]
    }

    handleDelete = (counterId) => {
        // delete Whole item from array so use filter method
        const counters = this.state.counters.filter((c) => c.id !== counterId);
        this.setState({ counters })
    }

    handleDecrement = (value, counterId) => {
        const counters = this.state.counters.filter((c) => c.id === counterId);
        counters.value -= 1;
        console.log(counters)

        this.setState({ ...counters })
    }

    render() {
        return (
            <div>
                {this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDel={this.handleDelete}
                        onDec={this.handleDecrement}
                        counter={counter} //Will send whole counter Obj from COUNTERS ARRAY
                    >
                    </Counter>
                )}

            </div>
        );
    }
}

export default Counters;