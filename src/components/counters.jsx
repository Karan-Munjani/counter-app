import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.onReset} className="btn btn-primary m-2">
                    Reset
        </button>

                {this.props.counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        counter={counter} //Will send whole counter Obj from COUNTERS ARRAY
                        onDel={this.props.onDelete}
                        onDecrement={this.props.onDecrement}
                        onIncrement={this.props.onIncrement}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;
