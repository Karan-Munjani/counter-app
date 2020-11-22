import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 10 },
            { id: 3, value: 5 },
            { id: 4, value: 5 },
        ],
    };

    handleDelete = (counterId) => {
        // delete Whole item from array so use filter method
        const counters = this.state.counters.filter((c) => c.id !== counterId);
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map((c) => {
            c.value = 0;
            return c;
        });

        this.setState({ counters });
    };

    handleIncrement = (counter) => {
        const cntrs = [...this.state.counters]//copying counters array
        const index = cntrs.indexOf(counter);
        cntrs[index] = { ...counter };
        cntrs[index].value++;
        // console.log(this.state.counters[0])


        this.setState({ counters: cntrs })


    }

    render() {
        return (
            <div>
                <button onClick={this.handleReset} className="btn btn-primary m-2">
                    Reset
        </button>

                {this.state.counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        counter={counter} //Will send whole counter Obj from COUNTERS ARRAY
                        onDel={this.handleDelete}
                        onDecrement={this.handleDecrement}
                        onIncrement={this.handleIncrement}
                    ></Counter>
                ))}
            </div>
        );
    }
}

export default Counters;
