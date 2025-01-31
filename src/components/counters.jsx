import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {


    render() {
        const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props;
        return (
            <div>
                <button onClick={onReset} className="btn btn-primary m-2">
                    Reset
        </button>

                {counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        counter={counter} //Will send whole counter Obj from COUNTERS ARRAY
                        onDel={onDelete}
                        onDecrement={onDecrement}
                        onIncrement={onIncrement}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;
